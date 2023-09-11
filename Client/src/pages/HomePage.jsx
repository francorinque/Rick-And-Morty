import { useSelector } from 'react-redux'
import Cards from '../components/Cards/Cards'

const HomePage = () => {
	const characters = useSelector(state => state.characters.characters)

	return (
		<>
			<Cards characters={characters} />
		</>
	)
}
export default HomePage
