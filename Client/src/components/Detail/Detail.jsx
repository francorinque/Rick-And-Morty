import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacterDetail } from '../../redux/actions/actions'

import ContentLoader from 'react-content-loader'

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
		<div className={style.loader}>
			<ContentLoader
				speed={2}
				width={800}
				height={400}
				viewBox="0 0 800 400"
				backgroundColor="hsl(0, 0%, 35%, 40%)"
				foregroundColor="hsl(0, 0%, 35%, 40%)"
			>
				<rect x="42" y="150" rx="3" ry="3" width="161" height="12" />
				<rect x="40" y="101" rx="3" ry="3" width="177" height="13" />
				<rect x="245" y="14" rx="3" ry="3" width="304" height="288" />
				<rect x="43" y="174" rx="3" ry="3" width="161" height="12" />
				<rect x="42" y="196" rx="3" ry="3" width="161" height="12" />
				<rect x="42" y="127" rx="3" ry="3" width="161" height="12" />
				<rect x="42" y="217" rx="3" ry="3" width="161" height="12" />
			</ContentLoader>
		</div>
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
