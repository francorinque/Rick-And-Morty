import { createContext, useState } from 'react'

export const AlertContext = createContext(null)

export const AlertProvider = ({ children }) => {
	const [showAlert, setShowAlert] = useState({
		showme: false,
		text: '',
	})

	return (
		<AlertContext.Provider value={{ showAlert, setShowAlert }}>
			{children}
		</AlertContext.Provider>
	)
}
