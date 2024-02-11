import httpService from "./http.service"

const brandsCategoryService = {
	fetchAll: async () => {
		const { data } = await httpService.get("brandCategory/")
		return data
	}
}

export default brandsCategoryService
