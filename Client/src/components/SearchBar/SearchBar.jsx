import { useState } from 'react'
import { FaArrowsTurnToDots, FaSistrix } from 'react-icons/fa6'
import { useSelector, useDispatch } from 'react-redux'
import { addCharacter } from '../../redux/actions/actions.js'

import style from './SearchBar.module.css'

export default function SearchBar() {
	const [id, setId] = useState('')
	const characters = useSelector(state => state.characters.characters)
	const dispatch = useDispatch()

	const onSearch = id => {
		//estado global redux
		if (characters.find(char => char.id === id)) {
			alert('Ya existe ese ID!')
			return
		} else {
			dispatch(addCharacter(id))
		}
	}

	const onSearchRandom = () => {
		let randomId = Math.floor(Math.random() * 820)
		onSearch(randomId)
	}

	const handleChange = e => setId(e.target.value)

	const handleSearch = e => {
		e.preventDefault()
		onSearch(Number(id))
		setId('')
	}

	return (
		<div className={style.wrapper}>
			<button onClick={onSearchRandom} title="Get Random">
				<FaArrowsTurnToDots />
			</button>
			<form className={style.search} onSubmit={handleSearch}>
				<input
					type="search"
					value={id}
					placeholder="Enter id"
					onChange={handleChange}
				/>
				<button>
					<FaSistrix />
				</button>
			</form>
		</div>
	)
}
