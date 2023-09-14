import axios from 'axios'
import { charactersTypes, favoritesTypes } from './actions.types'

//*favorites

export const addFav = character => {
	const endpoint = 'http://localhost:3001/rickandmorty/fav'

	return async function (dispatch) {
		try {
			const { data } = await axios.post(endpoint, character)
			dispatch({
				type: favoritesTypes.ADD_FAV,
				payload: data,
			})
		} catch (error) {
			console.error(error)
		}
	}
}

export const removeFav = charId => {
	return async dispatch => {
		const endpoint = `http://localhost:3001/rickandmorty/fav/${charId}`
		const { data } = await axios.delete(endpoint)
		dispatch({
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

//*character

export const addCharacter = id => {
	return async dispatch => {
		try {
			const { data } = await axios(
				`http://localhost:3001/rickandmorty/character/${id}`
			)
			dispatch({
				type: charactersTypes.ADD_CHARACTER,
				payload: data,
			})
		} catch (error) {
			const { response } = error
			alert(`${response.data.message}`)
		}
	}
}

export const deleteCharacter = id => ({
	type: charactersTypes.DELETE_CHARACTER,
	payload: id,
})

export const getCharacterDetail = id => {
	return async dispatch => {
		try {
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
		} catch (error) {
			console.log(error)
		}
	}
}

// *FILTERS

export const filterCards = gender => ({
	type: favoritesTypes.FILTER,
	payload: gender,
})

export const orderCards = orden => ({
	type: favoritesTypes.ORDER,
	payload: orden,
})
