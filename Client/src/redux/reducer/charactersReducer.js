import { charactersTypes } from '../actions/actions.types'

const initialState = {
	characters: [],
	character: {},
	loading: false,
}

export const charactersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case charactersTypes.ADD_CHARACTER:
			return { ...state, characters: [...state.characters, payload] }
		case charactersTypes.DELETE_CHARACTER:
			return {
				...state,
				characters: state.characters.filter(char => char.id !== payload),
			}
		case charactersTypes.FETCH_DETAIL_REQUEST:
			return { ...state, loading: true }
		case charactersTypes.FETCH_DETAIL_SUCCESS:
			return { ...state, loading: false, character: payload }

		default:
			return state
	}
}
