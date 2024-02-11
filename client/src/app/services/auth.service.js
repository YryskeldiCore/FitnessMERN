import axios from "axios"
import { getRefreshToken } from "./localStorage.service"
import config from "../config.json"

export const authInstance = axios.create({
	baseURL: config.endPointForApi + "auth/"
})

const authService = {
	signUp: async (payload) => {
		return await authInstance.post("signUp", payload)
	},
	signIn: async (payload) => {
		return await authInstance.post("signInWithPassword", payload)
	},
	doRefreshToken: async () => {
		const { data } = await authInstance.post("token", {
			refresh_token: getRefreshToken()
		})
		return data
	}
}

export default authService
