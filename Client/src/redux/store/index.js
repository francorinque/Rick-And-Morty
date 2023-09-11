import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'
import { charactersReducer } from '../reducer/charactersReducer'
import { favoritesReducer } from '../reducer/favoritesReducer'

const rootReducer = combineReducers({
	favorites: favoritesReducer,
	characters: charactersReducer,
})

// Crea una función middleware con Redux Thunk
const middleware = [thunk]

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middleware))
)
export default store
