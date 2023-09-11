import { Route, Routes } from 'react-router-dom'

import Nav from './components/Nav/Nav'
import NotFound from './components/NotFound/NotFound'
import AboutPage from './pages/AboutPage'
import DetailPage from './pages/DetailPage'

import Circle from './components/Circle/Circle'
import Form from './components/Form/Form'
import { useApp } from './hooks/useApp'
import HomePage from './pages/HomePage'
import Favorites from './components/Favorites/Favorites'

function App() {
	const { pathname, logout, login } = useApp()

	let layoutClass = pathname === '/' && 'notPadding'

	return (
		<main className={`layout ${layoutClass}`}>
			<Circle />
			<Circle right />

			{pathname !== '/' && <Nav onLogout={logout} />}

			<Routes>
				<Route path="/" element={<Form onLogin={login} />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/detail/:id" element={<DetailPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</main>
	)
}

export default App
