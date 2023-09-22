import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addFav, deleteCharacter, removeFav } from '../redux/actions/actions'
import { AlertContext } from '../context/AlertContext'

export const useCard = ({ id, character }) => {
	const [isFav, setIsFav] = useState(false)
	const { setShowAlert } = useContext(AlertContext)

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

	const handleAlert = isFav => {
		if (isFav) {
			setShowAlert({ showme: true, text: 'Eliminado' })
			setTimeout(() => setShowAlert({ showme: false, text: '' }), 800)
		} else {
			setShowAlert({ showme: true, text: 'Añadido' })
			setTimeout(() => setShowAlert({ showme: false, text: '' }), 1000)
		}
	}

	const handleFavorite = () => {
		if (isFav) {
			setIsFav(false)
			dispatch(removeFav(id))
			handleAlert(isFav)
		} else {
			setIsFav(true)
			dispatch(addFav(character))
			handleAlert(isFav)
		}
	}

	const handleClose = () => {
		dispatch(deleteCharacter(idToNumber))
		dispatch(removeFav(id))
	}

	return { pathname, isFav, handleFavorite, handleClose, loading }
}
