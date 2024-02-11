import httpService from "./http.service"

const brandService = {
	fetchAll: async () => {
		const { data } = await httpService.get("brand/")
		return data
	}
}

export default brandService
