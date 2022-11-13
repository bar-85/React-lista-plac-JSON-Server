import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	const [users, setUsers] = useState([])

	const loadUsers = () => {
		axios.get('http://localhost:3001/users').then(res => {
			setUsers(res.data.reverse())
		})
	}

	useEffect(() => {
		loadUsers()
	}, [])

	function Delete(id) {
		axios.delete(`http://localhost:3001/users/${id}`)
		window.location.reload(false);
	}

	return (
		<div className='w-full px-10 py-8'>
			<h1 className='text-3xl font-bold text-purple-600'>Lista pracowników</h1>
			<div className='overflow-x-auto'>
				<table className='w-full text-center mt-8 border border-purple-700'>
					<thead className='border-b bg-purple-600'>
						<tr>
							<th scope='col' className='text-sm font-medium text-white px-6 py-4'>
								Id
							</th>
							<th scope='col' className='text-sm font-medium text-white px-6 py-4'>
								Imię i nazwisko
							</th>
							<th scope='col' className='text-sm font-medium text-white px-6 py-4'>
								Email
							</th>
							<th scope='col' className='text-sm font-medium text-white px-6 py-4'>
								Telefon
							</th>
							<th scope='col' className='text-sm font-medium text-white px-6 py-4'>
								Wypłata(zł)
							</th>
							<th scope='col' className='text-sm font-medium text-white px-6 py-4'>
								Edytuj/Usuń
							</th>
						</tr>
					</thead>
					<tbody>
						{users.map((data, id) => (
							<tr key={id} className='bg-white border border-purple-700'>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{id + 1}</td>
								<td className='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{data.name}</td>
								<td className='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{data.email}</td>
								<td className='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{data.phone}</td>
								<td className='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{data.paycheck}</td>
								<td className='flex justify-center items-center space-x-4 mt-2 px-3'>
									<Link className='px-6 py-2 text-white bg-green-600 rounded-lg'>Edytuj</Link>
									<Link onClick={() => Delete(data.id)} className='px-6 py-2 text-white bg-red-600 rounded-lg'>
										Usuń
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Home
