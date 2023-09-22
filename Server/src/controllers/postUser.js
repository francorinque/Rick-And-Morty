const User = require('../DB_connection')

const postUser = async (req, res) => {
	const { email, password } = req.body

	try {
		if (!email || !password)
			return res.status(400).json({ error: 'Faltan datos' })

		//recibo todos datos
		const newUser = await User.findOrCreate({
			where: { email: email },
			defaults: {
				email,
				password,
			},
		})
		res.status(200).json(newUser)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

module.exports = postUser
