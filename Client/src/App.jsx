import { Route, Routes } from 'react-router-dom'
import { useApp } from './hooks/useApp'

import { Circle, Favorites, Form, Nav, NotFound } from './components'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DetailPage from './pages/DetailPage'
import Alert from './components/Alert/Alert'

function App() {
	const { pathname, logout, login, isLoading } = useApp()

	let layoutClass =
		(pathname === '/' || pathname.split('/').includes('detail')) && 'notPadding'

	return (
		<main className={`layout ${layoutClass}`}>
			<Circle />
			<Circle right />
			<Alert />

			{pathname !== '/' && <Nav onLogout={logout} />}

			<Routes>
				<Route
					path="/"
					element={<Form onLogin={login} isLoading={isLoading} />}
				/>
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
