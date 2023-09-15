import { useDispatch, useSelector } from 'react-redux'
import { clearFav, filterCards, orderCards } from '../../redux/actions/actions'
import { useState } from 'react'

import style from './Favorites.module.css'
import Cards from '../Cards/Cards'

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
					{['Ascendente', 'Descendente'].map((str, index) => (
						<option value={str[0]} key={index}>
							{str}
						</option>
					))}
				</select>
				<select onChange={handleFilter}>
					{['All', 'Male', 'Female', 'Genderless', 'unknow'].map(
						(str, index) => (
							<option value={str} key={index}>
								{str}
							</option>
						)
					)}
				</select>
				<button onClick={handleClearAll}>Clear all</button>
			</div>

			<Cards characters={favorites} />
		</section>
	)
}
export default Favorites
