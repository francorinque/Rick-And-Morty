const users = require('../utils/users')

const login = (req, res) => {
	const { email, password } = req.query

	if (email && password) {
		let found = users.find(
			user => user.email === email && user.password === password
		)
		if (found) return res.status(200).send({ access: true })
		return res.status(404).send({ access: false })
	}
}

module.exports = login
