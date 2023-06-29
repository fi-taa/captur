import React from 'react'

function Hero({ heading, message }) {
  return (
    <div className='flex flex-col items-center justify-center h-screen f bg-fixed bg-cover custom-img'>
      <div className='flex flex-col items-center justify-center px-4 mt-[-10rem] text-white'>
        <h1 className='text-4xl md:text-6xl text-center font-bold  mb-6'>{heading}</h1>
        <p className='text-lg md:text-xl text-center mb-8'>{message}</p>
        <button className='px-6 py-3 rounded-md bg-blue-500 text-white text-lg font-semibold hover:bg-blue-600'>
          Book
        </button>
      </div>
    </div>
  )
}

export default Hero
