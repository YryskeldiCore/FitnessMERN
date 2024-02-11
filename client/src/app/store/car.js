import { createAction, createSlice } from "@reduxjs/toolkit"
import carService from "../services/car.service"

const initialState = {
	entities: [],
	isLoading: true,
	error: null
}

const carSlice = createSlice({
	name: "car",
	initialState,
	reducers: {
		carRequested(state) {
			state.isLoading = true
		},
		carReceived(state, action) {
			state.entities = action.payload
			state.isLoading = false
		},
		carRequestField(state, action) {
			state.error = action.payload
			state.isLoading = false
		},
		carStoppedLoader(state) {
			state.isLoading = false
		},
		carDeletedElement(state, action) {
			if (Array.isArray(action.payload)) {
				state.entities = action.payload
			} else {
				const newArray = [...state.entities]
				state.entities = newArray.filter((el) => el._id !== action.payload)
			}
		},
		carAddedElement(state, action) {
			state.entities = action.payload.targetElement
				? [...action.payload.newArray, action.payload.correctElement]
				: [...state.entities, action.payload.data]
		},
		carDeletedElementRequestField(state, action) {
			state.error = action.payload
		}
	}
})

const { actions, reducer: carReducer } = carSlice
const {
	carAddedElement,
	carDeletedElementRequestField,
	carDeletedElement,
	carRequested,
	carReceived,
	carRequestField,
	carStoppedLoader
} = actions

const carDeletedElementRequest = createAction("car/carDeletedElementRequest")
const carElementAddedRequest = createAction("car/carElementAddedRequest")
const carElementAddedRequestField = createAction(
	"car/carElementAddedRequestField"
)

// Actions
export function fetchAllCar(currentUser) {
	return async (dispatch) => {
		dispatch(carRequested())
		try {
			const { content } = await carService.fetchAll(currentUser)
			dispatch(carReceived(content))
		} catch (err) {
			carRequestField(err.message)
		}
	}
}
export function doStopLoaderCar() {
	return (dispatch) => {
		dispatch(carStoppedLoader())
	}
}
export function deleteElementAtCar(id) {
	return async (dispatch) => {
		dispatch(carDeletedElementRequest())
		try {
			await carService.deleteElement(id)
			if (id) {
				dispatch(carDeletedElement(id))
			}
			if (!id) {
				dispatch(carDeletedElement([]))
			}
		} catch (err) {
			const { code, message } = err?.response?.data?.error
			if (code !== 500) {
				dispatch(carDeletedElementRequestField(message))
			} else {
				dispatch(carDeletedElementRequestField(err.message))
			}
		}
	}
}
export function pushElementAtCar(data) {
	return async (dispatch, getState) => {
		dispatch(carElementAddedRequest())
		try {
			const carState = getState().car.entities
			const targetElement = carState.find((item) => item.name === data.name)
			let newArray
			let correctElement
			if (targetElement) {
				correctElement = { ...targetElement }
				correctElement.count += data.count
				correctElement.totalInStock = data.totalInStock
				newArray = carState.filter((item) => item.name !== data.name)
			} else {
				correctElement = data
			}
			await carService.push(correctElement)
			dispatch(carAddedElement({ targetElement, newArray, correctElement, data }))
		} catch (err) {
			const { code, message } = err?.response?.data?.error
			if (code !== 500) {
				dispatch(carElementAddedRequestField(message))
			} else {
				dispatch(carElementAddedRequestField(err.message))
			}
		}
	}
}

// Selectors
export function getLengthCar() {
	return (state) => {
		return state.car.entities.length
	}
}
export function getStatusLoaderCar() {
	return (state) => {
		return state.car.isLoading
	}
}
export function getCarState() {
	return (state) => {
		return state.car.entities
	}
}
export function getCarError() {
	return (state) => {
		return state.car.error
	}
}

export default carReducer
