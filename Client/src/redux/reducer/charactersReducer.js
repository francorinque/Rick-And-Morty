import { charactersTypes } from '../actions/actions.types'

const initialState = {
	characters: [],
}

export const charactersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case charactersTypes.ADD_CHARACTER:
			return {
				...state,
				characters: [...state.characters, payload],
			}

		case charactersTypes.DELETE_CHARACTER:
			return {
				...state,
				characters: state.characters.filter(char => char.id !== payload),
			}

		default:
			return state
	}
}
