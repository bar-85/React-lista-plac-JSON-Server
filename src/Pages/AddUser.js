import React from 'react'

const AddUser = () => {
  return (
    <div className='w-screen h-full justify-center flex flex-col items-center mt-16'>
      <h1 className='text-black text-2xl font-semibold font-Montserrat m-4 uppercase'>Dodaj pracownika</h1>
      <form className='w-[80%] h-full flex flex-col justify-center items-center'>
        <input type="text" placeholder='Imię i nazwisko' className='w-[80%] bg-white/10 text-xl font-Montserrat outline-none py-4 pl-6 border border-violet-600' />
      </form>
    </div>
  )
}

export default AddUser