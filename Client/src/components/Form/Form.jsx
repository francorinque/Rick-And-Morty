import useForm from '../../hooks/useForm'

import style from './Form.module.css'

const Form = ({ onLogin, isLoading }) => {
	const { handleChange, handleSubmit, handleDisabled, errors, userData } =
		useForm({ onLogin })

	return (
		<div className={style.wrapper}>
			<form onSubmit={handleSubmit} className={style.form}>
				{/* mail */}
				<div className={style.inputField}>
					<input
						type="email"
						id="email"
						placeholder="Email"
						value={userData.email}
						name="email"
						onChange={handleChange}
					/>
					{errors.email && <span className={style.error}>{errors.email}</span>}
				</div>
				{/* password */}
				<div className={style.inputField}>
					<input
						type="password"
						placeholder="Password"
						value={userData.password}
						name="password"
						onChange={handleChange}
					/>
					{errors.password && (
						<span className={style.error}>{errors.password}</span>
					)}
				</div>
				<button type="submit" disabled={handleDisabled()} className={style.btn}>
					{isLoading ? <div className={style.loader}></div> : 'Login'}
				</button>
			</form>
		</div>
	)
}
export default Form
