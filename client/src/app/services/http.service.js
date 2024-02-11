import axios from "axios"
import configApi from "../config.json"
import localStorageService from "./localStorage.service"
import authService from "./auth.service"

const http = axios.create({
	baseURL: configApi.endPointForApi
})

http.interceptors.request.use(
	async (config) => {
		const refreshTokenAccess = localStorageService.getRefreshToken()
		const liveToken = Number(localStorageService.getLiveTimeToken())
		const idAccessToken = localStorageService.getIdToken()
		const isOverdue = refreshTokenAccess && liveToken < Date.now()
		if (isOverdue) {
			const { expiresIn, refreshToken, accessToken, userId } = await authService.doRefreshToken()
			localStorageService.setToken({
				expiresIn,
				accessToken,
				refreshToken,
				userId
			})
		}
		if (idAccessToken) {
			config.headers = {
				...config.headers,
				Authorization: `Bearer ${idAccessToken}`
			}
		}
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

http.interceptors.response.use(
	(res) => {
		res.data = { content: res.data }
		return res
	},
	(error) => {
		return Promise.reject(error)
	}
)

const httpService = {
	get: http.get,
	post: http.post,
	put: http.put,
	patch: http.patch,
	options: http.options,
	delete: http.delete
}

export default httpService
