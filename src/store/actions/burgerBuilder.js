import * as actionTypes from './actionTypes'

export const addIngredient = (name) => {
	return {
		type: actionTypes.ADD_INGREDIENT,
		ingredientName: name
	}

	// {type:actionTypes.ADD_INGREDIENT, ingredientName:ingName}
}

export const removeIngredient = (name) => {
	return {
		type: actionTypes.REMOVE_INGREDIENT,
		ingredientName: name
	}
}
// {type:actionTypes.REMOVE_INGREDIENT, ingredientName:ingName}