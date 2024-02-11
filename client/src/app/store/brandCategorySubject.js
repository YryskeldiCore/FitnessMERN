import { createSlice } from "@reduxjs/toolkit"
import brandsSubjectService from "../services/brandsSubjectCategories.service"

const initialState = {
	entities: [],
	isLoading: true,
	error: null
}

const brandCategorySubject = createSlice({
	name: "brandCategorySubject",
	initialState,
	reducers: {
		brandCategorySubjectRequested(state) {
			state.isLoading = true
		},
		brandCategorySubjectReceived(state, action) {
			state.entities = action.payload
			state.isLoading = false
		},
		brandCategorySubjectRequestField(state, action) {
			state.error = action.payload
			state.isLoading = false
		}
	}
})

const { actions, reducer: brandCategorySubjectReducer } = brandCategorySubject
const {
	brandCategorySubjectRequested,
	brandCategorySubjectReceived,
	brandCategorySubjectRequestField
} = actions

// Actions
export function fetchAllBrandCategorySubject() {
	return async (dispatch) => {
		dispatch(brandCategorySubjectRequested())
		try {
			const { content } = await brandsSubjectService.fetchAll()
			dispatch(brandCategorySubjectReceived(content))
		} catch (err) {
			brandCategorySubjectRequestField(err.message)
		}
	}
}

// Selectors
export function getStatusLoaderBrandCategorySubject() {
	return (state) => {
		return state.brandCategorySubject.isLoading
	}
}
export function getBrandCategorySubjectData() {
	return (state) => {
		return state.brandCategorySubject.entities
	}
}

export default brandCategorySubjectReducer
