import httpService from "./http.service"

const categoryService = {
	fetchAll: async () => {
		const { data } = await httpService.get("category/")
		return data
	}
}

export default categoryService
