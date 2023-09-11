import { FaBars, FaUserMinus } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'
import { useNav } from '../../hooks/useNav'
import rickyAndMortyLogo from '../../assets/Rick_and_morty_logo.png'
import SearchBar from '../SearchBar/SearchBar'

import style from './Nav.module.css'

const Nav = ({ onLogout }) => {
	const { showMenu, scrolled, handleToggle, navLinks } = useNav()
	let activeLink = ({ isActive }) => (isActive ? style.active : '')

	return (
		<nav className={`${style.nav} ${(showMenu || scrolled) && style.efectBg} `}>
			<div className={style.top}>
				<Link className={style.logo} to="/home">
					<img src={rickyAndMortyLogo} alt="logo ricky and morty png" />
				</Link>
				<button onClick={handleToggle} className={style.toggle}>
					<FaBars />
				</button>
				<div
					className={`
				  ${style.menu}
				  ${showMenu && style.efectBg}
				 `}
				>
					{navLinks.map(({ id, to, text }) => (
						<NavLink key={id} to={to} className={activeLink}>
							<span>{text}</span>
						</NavLink>
					))}

					<button onClick={onLogout} title="Logout" className={style.logout}>
						<FaUserMinus />
					</button>
				</div>
			</div>

			<SearchBar />
		</nav>
	)
}
export default Nav
