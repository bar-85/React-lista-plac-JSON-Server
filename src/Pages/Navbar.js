import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='w-full h-16 bg-purple-600 flex items-center px-10 py-2 justify-between'>
			<h1 className='text-white text-3xl font-semibold font-Montserrat'>Lista płac</h1>
			<Link to='add-user' className='bg-transparent hover:bg-purple-500 font-semibold text-white py-2 px-4 border hover:border-white rounded'>Dodaj</Link>
		</div>
	)
}

export default Navbar
