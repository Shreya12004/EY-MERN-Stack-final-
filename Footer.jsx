import React from 'react'
import { FaInstagram, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import FooterLinks from './FooterLinks';

const importantLinks = [
  { name: 'Home' },
  { name: 'About' },
  { name: 'Service' },
  { name: 'Login' },
]

const Links = [
  { name: 'Privacy Policy' },
  { name: 'Services' },
  { name: 'About Us' },
]

const Footer = () => {
  return (
    <div className='text-white rounded-t-3xl bg-gradient-to-r from-green-800 to-green-700 p-10'>
      <div className='mx-auto max-w-[1200px] p-4'>
        {/* Footer constraint */}
        <div className='grid gap-10 py-10 md:grid-cols-3'>
          <div className='px-4 py-8'>
            <h1 className='mb-5 text-justify text-2xl sm:text-left sm:text-4xl'>
              <a href="/#home" className='uppercase'>Change <span className='inline-block font-bold text-yellow-500'>Makers</span></a>
            </h1>
            <p className='text-justify text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quia laudantium quo dolorem nisi iure voluptates unde veritatis molestiae deleniti.</p>
            <div className='flex items-center gap-3 mt-5'>
              <FaLocationArrow />
              <p>Sangamner, Maharashtra</p>
            </div>
            <div className='flex items-center gap-3 mt-3'>
              <FaMobileAlt />
              <p>+91 1452145263</p>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-10 sm:grid-cols-3 md:pl-10 col-span-2'>
            <div className='px-4 py-8'>
              <h1 className='mb-5 text-xl font-bold sm:text-left sm:text-2xl'>Important Links</h1>
              <ul className='flex flex-col gap-3'>
                <FooterLinks links={importantLinks}/>
              </ul>
            </div>
            <div className='px-4 py-8'>
              <h1 className='mb-5 text-xl font-bold sm:text-left sm:text-2xl'>Links</h1>
              <ul className='flex flex-col gap-3'>
                <FooterLinks links={Links}/>
              </ul>
            </div>
            <div className='px-4 py-8'>
              <h1 className='mb-5 text-xl font-bold sm:text-left sm:text-2xl'>Social Media</h1>
              <div className='flex flex-col'>
                <h1>Subscribe to our newsletter</h1>
                <input type="text" placeholder='Enter your email' className='rounded-full px-3 py-1 mt-3 text-black focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'/>
                <div className='flex gap-3 mt-6 items-center'>
                  <a href="#" className='duration-200 hover:scale-105'><FaInstagram className='text-3xl'/></a>
                  <a href="#" className='duration-200 hover:scale-105'><FaInstagram className='text-3xl'/></a>
                  <a href="#" className='duration-200 hover:scale-105'><FaInstagram className='text-3xl'/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer copyright */}
        <div className='bottom-footer'>
          <p className='border-t-2 border-gray-300/50 py-6 text-center'>
            Copyright 2024. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
