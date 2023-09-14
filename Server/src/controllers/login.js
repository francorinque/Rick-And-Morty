const users = require('../utils/users')

const login = (req, res) => {
	const { email, password } = req.query

	if (email && password) {
		let found = users.find(
			user => user.email === email && user.password === password
		)

		let access = found ? true : false
		res.status(200).json({ access })
	}
}

module.exports = login
