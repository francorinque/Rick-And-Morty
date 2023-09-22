const User = require('../DB_connection')

const login = async (req, res) => {
	const { email, password } = req.query
	try {
		// no recibe alguno de los datos
		if (!email || !password)
			return res.status(400).json({ error: 'Faltan datos' })

		//se busca al usuario
		const userFound = await User.findOne({ where: { email: email } })

		if (userFound) {
			if (userFound.password !== password) {
				res.status(403).json({ error: 'Contraseña incorrecta' })
			} else res.status(200).json({ access: true })
		} else res.status(404).json({ error: 'Usuario no encontrado' })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

module.exports = login
