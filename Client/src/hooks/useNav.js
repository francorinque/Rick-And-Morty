import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const useNav = () => {
	const [showMenu, setShowMenu] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	const { pathname } = useLocation()

	const navLinks = [
		{
			id: 1,
			to: '/home',
			text: 'Home',
		},
		{
			id: 2,
			to: '/about',
			text: 'About',
		},
		{
			id: 3,
			to: '/favorites',
			text: 'Favorites',
		},
	]

	const handleToggle = () => setShowMenu(!showMenu)

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setScrolled(true)
		} else {
			setScrolled(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		setShowMenu(false)
	}, [pathname])

	return {
		showMenu,
		scrolled,
		handleToggle,
		navLinks,
	}
}
