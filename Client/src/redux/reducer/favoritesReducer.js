import { favoritesTypes } from '../actions/actions.types'

const initialState = {
	// allFavorites =  cache
	allFavorites: [],
	favorites: [],
}

export const favoritesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case favoritesTypes.ADD_FAV: {
			return {
				...state,
				favorites: [...payload], // []
				allFavorites: [...payload], // []
			}
		}

		case favoritesTypes.REMOVE_FAV: {
			return { ...state, allFavorites: payload, favorites: payload }
		}

		case favoritesTypes.CLEAR_FAV: {
			return { ...state, allFavorites: payload, favorites: payload }
		}

		case favoritesTypes.FILTER: {
			return {
				...state,
				favorites:
					payload === 'All'
						? [...state.allFavorites]
						: state.allFavorites.filter(el => el.gender === payload),
			}
		}

		case favoritesTypes.ORDER: {
			let allFavorites = [...state.allFavorites]

			return {
				...state,
				favorites:
					payload === 'A'
						? allFavorites.sort((a, b) => a.id - b.id)
						: allFavorites.sort((a, b) => b.id - a.id),
			}
		}

		default:
			return state
	}
}
