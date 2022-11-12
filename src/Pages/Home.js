import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		axios.get('http://localhost:3001/users').then(res => {
			setUsers(res.data)
		})
	}, [])

	return (
		<div className='w-full h-full flex flex-col px-10 py-8'>
			<div className='w-full flex flex-col min-h-[50h] justify-center items-center'>
				<h1 className='text-purple-700 text-3xl font-semibold font-Montserrat'>Lista pracowników</h1>
				<div className='flex flex-col'>
					<div className='overflow-x-auto sm:-mx-6 lg:-mx-8 '>
						<div className='py-4 inline-block min-w-full sm:px-6 lg:px-8'>
							<div className='overflow-hidden'>
								<table className='w-[80%] text-center overflow-hidden overflow-y-scroll mt-8 border border-purple-700'>
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
												Pokaż/Edytuj/Usuń
											</th>
										</tr>
									</thead>
									<tbody>
										{users.map((data, index) => (

										
										<tr key={index} className='bg-white border border-purple-700'>
											<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{index + 1}</td>
											<td className='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{data.name}</td>
											<td className='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{data.email}</td>
											<td className='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{data.phone}</td>
											<td className='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{data.paycheck}</td>
											<td className='flex justify-center items-center space-x-4 mt-2 px-3'>
												<button className='px-6 py-2 text-white bg-purple-600 rounded-lg'>Pokaż</button>
												<button className='px-6 py-2 text-white bg-green-600 rounded-lg'>Edytuj</button>
												<button className='px-6 py-2 text-white bg-red-600 rounded-lg'>Usuń</button>
											</td>
										</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
