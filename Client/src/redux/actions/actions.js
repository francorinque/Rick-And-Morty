import axios from 'axios'
import { charactersTypes, favoritesTypes } from './actions.types'

//*favorites

// ACTION | addFav
export const addFav = character => {
	const endpoint = 'http://localhost:3001/rickandmorty/fav'
	return async function (dispatch) {
		const { data } = await axios.post(endpoint, character)
		return dispatch({
			type: favoritesTypes.ADD_FAV,
			payload: data,
		})
	}
}

export const removeFav = charId => {
	return async dispatch => {
		const endpoint = `http://localhost:3001/rickandmorty/fav/${charId}`
		const { data } = await axios.delete(endpoint)
		return dispatch({
			type: favoritesTypes.REMOVE_FAV,
			payload: data,
		})
	}
}

export const clearFav = () => {
	return async dispatch => {
		const endpoint = 'http://localhost:3001/rickandmorty/fav/clear'
		const { data } = await axios.get(endpoint)
		return dispatch({
			type: favoritesTypes.CLEAR_FAV,
			payload: data,
		})
	}
}

export const filterCards = gender => ({
	type: favoritesTypes.FILTER,
	payload: gender,
})

export const orderCards = orden => ({
	type: favoritesTypes.ORDER,
	payload: orden,
})

//*character
export const addCharacter = newCharacter => ({
	type: charactersTypes.ADD_CHARACTER,
	payload: newCharacter,
})

export const deleteCharacter = id => ({
	type: charactersTypes.DELETE_CHARACTER,
	payload: id,
})

export const getCharacterDetail = id => {
	return async dispatch => {
		dispatch({ type: charactersTypes.FETCH_DETAIL_REQUEST })
		const { data } = await axios.get(
			`http://localhost:3001/rickandmorty/character/${id}`
		)
		if (data.name) {
			dispatch({
				type: charactersTypes.FETCH_DETAIL_SUCCESS,
				payload: data,
			})
		}
	}
}
