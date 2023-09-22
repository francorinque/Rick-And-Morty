import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const useApp = () => {
	const [access, setAccess] = useState(true)
	const [isLoading, setIsLoading] = useState(false)

	const navigate = useNavigate()
	const { pathname } = useLocation()

	async function login(userData) {
		try {
			setIsLoading(true)
			const { email, password } = userData
			const URL = 'http://localhost:3001/rickandmorty/login'

			const { data } = await axios.get(
				`${URL}?email=${email}&password=${password}`
			)
			setAccess(data.access)
			access && navigate('/home')
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading(false)
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
		isLoading,
	}
}
