import './App.css'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import AddUser from './Pages/AddUser'
import Edit from './Pages/Edit'



function App() {
	return (
		<div className='App'>
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/add' element={<AddUser />} />
				<Route path='/edit/:id' element={<Edit />} />
			</Routes>
		</div>
	)
}

export default App
