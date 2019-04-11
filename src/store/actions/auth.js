import * as actionTypes from './actionTypes'

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	}
}

export const authSuccess = (authData) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		authData: authData
	}
}

export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error
	}
}

export const auth = (email, password) => {
	return dispatch => {
		dispatch(authStart())
		// axios.get('/orders.json')
		// 	.then(res => {
		// 		const fetchedOrders = []
		// 		for(let key in res.data){
		// 			fetchedOrders.push({
		// 				...res.data[key],
		// 				id:key
		// 			})
		// 		}
		// 		dispatch(authSuccess(fetchedOrders))
		// 	})
		// 	.catch(err => {
		// 		dispatch(authFail(err))
		// 	})
	}
}