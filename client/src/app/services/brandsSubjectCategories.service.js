import httpService from "./http.service"

const brandsSubjectService = {
	fetchAll: async () => {
		const { data } = await httpService.get("brandSubject/")
		return data
	}
}

export default brandsSubjectService
