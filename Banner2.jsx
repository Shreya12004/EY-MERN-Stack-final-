import React from 'react'
import Image from '../../assets/blogs/blog4.jpg'

const Banner2 = () => {
  return (
    <div className='flex items-center justify-center bg-slate-100'>
      <div className="relative w-full">
        <img src={Image} alt="" className='w-full h-[500px] object-cover'/>
        <h1 className='absolute bottom-4 left-4 text-2xl font-semibold text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg'>
          Help The Needy People
        </h1>
      </div>
    </div>
  )
}

export default Banner2
