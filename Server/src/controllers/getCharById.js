const axios = require('axios')

const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = (req, res) => {
	const { id } = req.params

	axios
		.get(`${URL}${id}`)
		.then(response => {
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
				res.status(200).send(character)
			} else if (response.status === 404) res.status(404).send('Not found')
		})
		.catch(error => res.status(500).send(error.message))
}

module.exports = { getCharById }
