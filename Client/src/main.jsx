import * as ReactDOMClient from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

import './index.css'
import { AlertProvider } from './context/AlertContext'

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)
root.render(
	<Provider store={store}>
		<AlertProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AlertProvider>
	</Provider>
)
