import { Link } from 'react-router-dom'
import { useCard } from '../../hooks/useCard'
import { FaXmark } from 'react-icons/fa6'

import style from './Card.module.css'

export default function Card({ props }) {
	const { id, name, image } = props
	const { pathname, isFav, handleFavorite, handleClose } = useCard({
		id,
		character: props,
	})

	return (
		<div className={style.card}>
			<div className={style.top}>
				<button onClick={handleFavorite} title="Add to fav">
					{isFav ? '❤️' : '🤍'}
				</button>
				{pathname === '/home' && (
					<button onClick={handleClose} title="Delete">
						<FaXmark />
					</button>
				)}
			</div>

			<img src={image} alt={name} className={style.img} />
			<Link to={`/detail/${id}`} className={style.name}>
				<h2>Name: {name}</h2>
			</Link>
		</div>
	)
}
