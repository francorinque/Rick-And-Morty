import Card from '../Card/Card'
import style from './Cards.module.css'

export default function Cards({ characters }) {
	return (
		<section className={style.container}>
			{characters.map(character => (
				<Card key={character.id} props={character} />
			))}
		</section>
	)
}
