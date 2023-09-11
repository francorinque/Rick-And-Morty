import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const useApp = () => {
	const [access, setAccess] = useState(false)

	const navigate = useNavigate()
	const { pathname } = useLocation()

	async function login(userData) {
		try {
			const { email, password } = userData
			const URL = 'http://localhost:3001/rickandmorty/login'

			const { data } = await axios.get(
				`${URL}?email=${email}&password=${password}`
			)
			setAccess(data.access)
			if (access) {
				navigate('/home')
			}
		} catch (error) {
			console.log(error)
		}
	}

	const logout = () => {
		setAccess(false)
	}

	useEffect(() => {
		// AL RECARGAR REDIRECCIONA AL LOGIN
		!access && navigate('/')
	}, [access])

	return {
		pathname,
		logout,
		login,
	}
}
