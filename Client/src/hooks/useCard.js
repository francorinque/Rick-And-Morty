import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addFav, deleteCharacter, removeFav } from '../redux/actions/actions'

export const useCard = ({ id, character }) => {
	const [isFav, setIsFav] = useState(false)

	const dispatch = useDispatch()
	const favorites = useSelector(state => state.favorites.favorites)
	const loading = useSelector(state => state.characters.loading)
	const { pathname } = useLocation()

	let idToNumber = Number(id)

	useEffect(() => {
		favorites.forEach(fav => {
			if (fav.id === character.id) {
				setIsFav(true)
			}
		})
		// eslint-disable-next-line
	}, [favorites])

	const handleFavorite = () => {
		if (isFav) {
			setIsFav(false)
			dispatch(removeFav(id))
		} else {
			setIsFav(true)
			dispatch(addFav(character))
		}
	}

	const handleClose = () => {
		dispatch(deleteCharacter(idToNumber))
		dispatch(removeFav(id))
	}

	return { pathname, isFav, handleFavorite, handleClose, loading }
}
