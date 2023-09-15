import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacterDetail } from '../../redux/actions/actions'

import style from './Detail.module.css'

const Detail = () => {
	const { id } = useParams()
	const detail = useSelector(state => state.detail)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCharacterDetail(id))
		// eslint-disable-next-line
	}, [id])

	const { name, status, species, gender, origin, image, location } =
		detail?.characterDetail

	return detail.loading ? (
		<div className={style.loaderWrapper}>
			<div className={style.loader}></div>
		</div>
	) : (
		<div className={style.container}>
			<div className={style.text}>
				<h2 className={style.name}>
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
