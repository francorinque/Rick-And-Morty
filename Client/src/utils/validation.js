const validEmail = email => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	const emailIsValid = emailRegex.test(email) // true o false

	if (!email.length) return 'Email is empty'
	else if (!emailIsValid) return 'Invalid email'
	else if (email.length > 35) return 'Email must not be more than 35 characters'
	else return ''
}

const validPassword = password => {
	const passwordRegex = /\d/
	const isValidPassword = passwordRegex.test(password)

	if (!isValidPassword) return 'The password must have at least one number'
	else if (password.length < 6 || password.length > 10)
		return 'The password must be between 6 and 10 characters'
	else return ''
}

export const validation = userData => {
	const errors = {}

	errors.email = validEmail(userData.email)
	errors.password = validPassword(userData.password)

	return errors
}
