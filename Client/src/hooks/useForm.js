import { useState } from 'react'
import { validation } from '../utils/validation'

let initialState = {
	email: '',
	password: '',
}

let initialErrors = {
	email: 'Email is required',
	password: 'Password is required',
}

const useForm = ({ onLogin }) => {
	const [userData, setUserData] = useState(initialState)
	const [errors, setErrors] = useState(initialErrors)

	const handleChange = e => {
		setUserData({ ...userData, [e.target.name]: e.target.value })
		setErrors(validation({ ...userData, [e.target.name]: e.target.value }))
	}

	const handleSubmit = e => {
		e.preventDefault()
		onLogin(userData)
	}

	// maneja el disabled del boton
	const handleDisabled = () => {
		let disabled
		for (let prop in errors) {
			if (errors[prop] !== '') {
				disabled = true
				break
			} else disabled = false
		}

		return disabled
	}

	return { handleChange, handleSubmit, handleDisabled, errors, userData }
}
export default useForm
