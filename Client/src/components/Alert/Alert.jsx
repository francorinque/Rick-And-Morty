import { useContext } from 'react'
import style from './Alert.module.css'
import { AlertContext } from '../../context/AlertContext'

const Alert = () => {
	const { showAlert } = useContext(AlertContext)

	let classAlert = showAlert.showme ? style.showme : style.hidden

	return <div className={`${style.alert} ${classAlert}`}>{showAlert.text}</div>
}
export default Alert
