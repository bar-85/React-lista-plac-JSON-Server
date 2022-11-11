import React from 'react'

const Home = () => {
	return (
		<div className='w-full h-full justify-center items-center flex flex-col px-10 py-8'>
			<h1 className='text-purple-700 text-3xl font-semibold font-Montserrat'>Lista pracowników</h1>
			<div class='flex flex-col'>
				<div class='overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div class='py-4 inline-block min-w-full sm:px-6 lg:px-8'>
						<div class='overflow-hidden'>
							<table class='min-w-full text-center'>
								<thead class='border-b bg-purple-600'>
									<tr>
										<th scope='col' class='text-sm font-medium text-white px-6 py-4'>
											Id
										</th>
										<th scope='col' class='text-sm font-medium text-white px-6 py-4'>
											Imię
										</th>
										<th scope='col' class='text-sm font-medium text-white px-6 py-4'>
											Nazwisko
										</th>
                    <th scope='col' class='text-sm font-medium text-white px-6 py-4'>
											Email
										</th>
										<th scope='col' class='text-sm font-medium text-white px-6 py-4'>
											Do wypłaty (zł)
										</th>
                    <th scope='col' class='text-sm font-medium text-white px-6 py-4'>
											Akcja
										</th>
									</tr>
								</thead>
								<tbody>
									<tr class='bg-white border-b'>
										<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>1</td>
										<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Marek</td>
										<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Kowalski</td>
										<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>mkowalski@gmail.com</td>
										<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>1000</td>
										<td class='flex justify-center items-center space-x-4 mt-4'>
                      <button>Pokaż</button>
                      <button>Edytuj</button>
                      <button>Usuń</button>
                      </td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
