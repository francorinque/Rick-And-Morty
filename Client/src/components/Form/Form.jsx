import useForm from '../../hooks/useForm'

import styledForm from './Form.module.css'

const Form = ({ onLogin }) => {
	const { handleChange, handleSubmit, handleDisabled, errors, userData } =
		useForm({ onLogin })

	return (
		<div className={styledForm.wrapper}>
			<form onSubmit={handleSubmit} className={styledForm.form}>
				{/* mail */}
				<div className={styledForm.inputField}>
					<input
						type="email"
						id="email"
						placeholder="Email"
						value={userData.email}
						name="email"
						onChange={handleChange}
					/>
					{errors.email && (
						<span className={styledForm.error}>{errors.email}</span>
					)}
				</div>
				{/* password */}
				<div className={styledForm.inputField}>
					<input
						type="password"
						placeholder="Password"
						value={userData.password}
						name="password"
						onChange={handleChange}
					/>
					{errors.password && (
						<span className={styledForm.error}>{errors.password}</span>
					)}
				</div>
				<button
					type="submit"
					disabled={handleDisabled()}
					className={styledForm.btn}
				>
					Login
				</button>
			</form>
		</div>
	)
}
export default Form
