const Favorite = require('../DB_connection')

const postFav = async (req, res) => {
	const { name, origin, status, image, species, gender } = req.body
	try {
		if (!name || !origin || !status || !image || !species || !gender)
			return res.status(401).json({ error: 'Faltan datos' })

		await Favorite.create({ name, origin, status, image, species, gender })
		const allFavorites = await Favorite.findAll()
		res.status(200).json(allFavorites)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

module.exports = postFav
