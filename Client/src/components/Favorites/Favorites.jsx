import { useDispatch, useSelector } from 'react-redux'
import { clearFav, filterCards, orderCards } from '../../redux/actions/actions'
import { useState } from 'react'
import Cards from '../Cards/Cards'

import style from './Favorites.module.css'

const Favorites = () => {
	const [, setAux] = useState(false)
	const favorites = useSelector(state => state.favorites.favorites)
	const dispatch = useDispatch()

	const handleOrder = event => {
		dispatch(orderCards(event.target.value))
		setAux(true)
	}
	const handleFilter = event => dispatch(filterCards(event.target.value))
	const handleClearAll = () => dispatch(clearFav())

	return (
		<section className={style.container}>
			<div className={style.filters}>
				<select onChange={handleOrder}>
					<option value="A">Ascendente</option>
					<option value="D">Descendente</option>
				</select>
				<select onChange={handleFilter}>
					<option value="All">All</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Genderless">Genderless</option>
					<option value="unknown">unknown</option>
				</select>
				<button onClick={handleClearAll}>Clear all</button>
			</div>

			<Cards characters={favorites} />
		</section>
	)
}
export default Favorites
