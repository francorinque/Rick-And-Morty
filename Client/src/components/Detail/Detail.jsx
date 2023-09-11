import { useParams } from 'react-router-dom'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacterDetail } from '../../redux/actions/actions'

import style from './Detail.module.css'

const Detail = () => {
	const { id } = useParams()
	const character = useSelector(state => state.characters)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCharacterDetail(id))
	}, [id])

	const { name, status, species, gender, origin, image, location } =
		character?.character

	return character.loading ? (
		<h4>LOADING...</h4>
	) : (
		<div className={style.container}>
			<div className={style.text}>
				<h2>
					<b>Name:</b> {name}
				</h2>
				<p>
					<b>Status:</b> {status}
				</p>
				<p>
					<b>Species:</b> {species}
				</p>
				<p>
					<b>Gender:</b> {gender}
				</p>
				<p>
					<b>Origin:</b> {origin?.name}
				</p>
				<p>
					<b>Location:</b> {location?.name}
				</p>
			</div>
			<figure>
				<img src={image} alt={name} className={style.imgWrapper} />
			</figure>
		</div>
	)
}
export default Detail
