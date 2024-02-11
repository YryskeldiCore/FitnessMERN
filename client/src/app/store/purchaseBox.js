import { createSlice, createAction } from "@reduxjs/toolkit"
import purchaseBoxService from "../services/purchaseBox.service"

const initialState = {
	entities: [],
	isLoading: true,
	error: null
}

const purchaseBoxSlice = createSlice({
	name: "purchaseBox",
	initialState,
	reducers: {
		purchaseBoxRequested(state) {
			state.isLoading = true
		},
		purchaseBoxReceived(state, action) {
			state.entities = action.payload
			state.isLoading = false
		},
		purchaseBoxRequestField(state, action) {
			state.entities = action.payload
			state.isLoading = false
		},
		purchaseBoxStoppedLoader(state) {
			state.isLoading = false
		},
		purchaseBoxAdded(state, action) {
			state.entities.push(action.payload)
		},
		purchaseBoxDeletedElement(state, action) {
			const newArray = [...state.entities]
			state.entities = newArray.filter((el) => el._id !== action.payload)
		}
	}
})

const { actions, reducer: purchaseBoxReducer } = purchaseBoxSlice
const {
	purchaseBoxRequested,
	purchaseBoxDeletedElement,
	purchaseBoxAdded,
	purchaseBoxStoppedLoader,
	purchaseBoxReceived,
	purchaseBoxRequestField
} = actions

const createPurchaseBoxRequested = createAction(
	"purchaseBox/createPurchaseBoxRequested"
)
const createPurchaseBoxRequestField = createAction(
	"purchaseBox/createPurchaseBoxRequestField"
)
const deletePurchaseBoxRequested = createAction(
	"purchaseBox/deletePurchaseBoxRequested"
)
const deletePurchaseBoxRequestField = createAction(
	"purchaseBox/deletePurchaseBoxRequestField"
)

// Actions
export function fetchAllPurchaseBoxData() {
	return async (dispatch) => {
		dispatch(purchaseBoxRequested())
		try {
			const { content } = await purchaseBoxService.fetchAll()
			dispatch(purchaseBoxReceived(content))
		} catch (err) {
			dispatch(purchaseBoxRequestField(err.message))
		}
	}
}
export function stopLoaderPurchaseBox() {
	return (dispatch) => {
		dispatch(purchaseBoxStoppedLoader())
	}
}
export function createPurchaseBoxElement(body) {
	return async (dispatch) => {
		dispatch(createPurchaseBoxRequested())
		try {
			await purchaseBoxService.create(body)
			dispatch(purchaseBoxAdded(body))
		} catch (err) {
			dispatch(createPurchaseBoxRequestField(err.message))
		}
	}
}
export function deletePurchaseBoxElement(id) {
	return async (dispatch) => {
		dispatch(deletePurchaseBoxRequested())
		try {
			await purchaseBoxService.delete(id)
			dispatch(purchaseBoxDeletedElement(id))
		} catch (err) {
			dispatch(deletePurchaseBoxRequestField(err.message))
		}
	}
}

// Selectors
export function getStatusLoaderPurchaseBox() {
	return (state) => {
		return state.purchaseBox.isLoading
	}
}
export function getStatePurchaseBox() {
	return (state) => {
		return state.purchaseBox.entities
	}
}

export default purchaseBoxReducer
