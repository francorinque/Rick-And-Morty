const axios = require('axios')

const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = async (req, res) => {
	const { id } = req.params

	try {
		const response = await axios.get(`${URL}${id}`)
		if (response.status === 200) {
			const { id, status, name, species, origin, image, gender, location } =
				response.data
			const character = {
				id,
				status,
				name,
				species,
				origin,
				image,
				gender,
				location,
			}
			res.status(200).json(character)
		} else {
			res.status(404).json({ message: `No hay personajes con el id: ${id}` })
		}
	} catch (error) {
		res.status(500).json({ message: `No hay personajes con el id: ${id}` })
	}
}

module.exports = { getCharById }
