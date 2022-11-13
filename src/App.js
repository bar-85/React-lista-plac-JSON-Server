import './App.css'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import AddUser from './Pages/AddUser'


function App() {
	return (
		<div className='App'>
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/add-user' element={<AddUser />} />
				 
			</Routes>
		</div>
	)
}

export default App
