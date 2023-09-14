import { charactersTypes } from '../actions/actions.types'

const initialState = {
	characterDetail: {},
	loading: false,
}

export const detailReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case charactersTypes.FETCH_DETAIL_REQUEST:
			return { ...state, loading: true }
		case charactersTypes.FETCH_DETAIL_SUCCESS:
			return { ...state, loading: false, characterDetail: payload }

		default:
			return state
	}
}
