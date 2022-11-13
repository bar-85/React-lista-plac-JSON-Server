import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Edit = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [paycheck, setPaycheck] = useState('')

  const navigate = useNavigate();

	const { id } = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3001/users/${id}`).then(res => {
			setName(res.data.name)
			setEmail(res.data.email)
			setPhone(res.data.phone)
      setPaycheck(res.data.paycheck)
		})
	}, [])

  const data = {
    name: name,
    email: email,
    phone: phone,
    paycheck: paycheck,
  };

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:3001/users/${id}`, data).then(navigate("/"));
  }

	return (
    <div className='w-screen h-full justify-center flex flex-col items-center mt-16'>
    <h1 className='text-black text-2xl font-semibold font-Montserrat m-4 uppercase'>Aktualizuj pracownika</h1>
    <form className='w-[80%] h-full flex flex-col justify-center items-center'>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type='text'
        placeholder='Imię i nazwisko'
        className='px-3 py-1.5 text-base font-normal text-gray-700 bg-purple-50 bg-clip-padding rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:outline-none border border-purple-600'
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='text'
        placeholder='Email'
        className='px-3 py-1.5 text-base font-normal mt-4 text-gray-700 bg-purple-50 bg-clip-padding rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:outline-none border border-purple-600'
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type='phone'
        placeholder='Telefon'
        className='px-3 py-1.5 text-base font-normal mt-4 text-gray-700 bg-purple-50 bg-clip-padding rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:outline-none border border-purple-600'
      />
      <input
        value={paycheck}
        onChange={(e) => setPaycheck(e.target.value)}
        type='number'
        placeholder='Wypłata'
        className='px-3 py-1.5 text-base font-normal mt-4 text-gray-700 bg-purple-50 bg-clip-padding rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:outline-none border border-purple-600'
      />
      <button
        onClick={Update}
        className='px-3 py-1.5 text-base font-normal mt-4 text-white bg-violet-900 bg-clip-padding rounded transition ease-in-out hover:bg-violet-800 border border-purple-550'>
        Aktualizuj
      </button>
      <Link to='/' className='px-3 py-1.5 text-base font-normal mt-4 text-white bg-purple-600 bg-clip-padding rounded transition ease-in-out hover:bg-purple-500 border border-purple-550'>Strona główna</Link>
    </form>
  </div>

  )
}

export default Edit
