import React, { useState, useEffect } from 'react'
import { FaBell, FaCaretDown } from "react-icons/fa";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from '../Navbar/ResponsiveMenu';

const Nav = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <>
      <nav className='bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500 text-white fixed top-0 w-full border-b border-gray-300'>
        <div className="container mx-auto p-4">
          <div className='flex items-center justify-between'>
            {/* Left Side Functions */}
            <div className='hidden md:flex items-center space-x-6'>
              <ul className='flex items-center space-x-6'>
                <li className='group relative'>
                  <a href="#" className='flex items-center gap-1'>
                    Fundraise For
                    <FaCaretDown className='transition-transform duration-200 group-hover:rotate-180' />
                  </a>
                  {/* Dropdown */}
                  <div className='absolute left-0 mt-2 w-48 bg-white shadow-lg text-black rounded-md hidden group-hover:block'>
                    <ul className='space-y-2 p-2'>
                      <li className='px-4 py-2 hover:bg-gray-200'>NGO / Charity</li>
                      <li className='px-4 py-2 hover:bg-gray-200'>Medical Treatment</li>
                      <li className='px-4 py-2 hover:bg-gray-200'>Other Cause</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#" className='flex items-center gap-1'>
                    Contact
                  </a>
                </li>
                <li>
                  <button className='bg-orange-500 px-4 py-2 rounded-full'>Login</button>
                </li>
              </ul>
            </div>
            {/* Centered Logo Section */}
            <div className='text-3xl font-bold text-center'>
              <a href="#">
                Fund <span className='text-orange-300'>Raisers</span>
              </a>
            </div>
            {/* Right Side Functions */}
            <div className='hidden md:flex items-center space-x-8'>
              {/* Notifications */}
              <div className='relative'>
                <FaBell className='text-2xl cursor-pointer' onClick={toggleNotifications} />
                {showNotifications && (
                  <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg text-black rounded-md p-2'>
                    <ul className='space-y-2'>
                      <li className='px-4 py-2 hover:bg-gray-200'>Notification 1</li>
                      <li className='px-4 py-2 hover:bg-gray-200'>Notification 2</li>
                      <li className='px-4 py-2 hover:bg-gray-200'>Notification 3</li>
                    </ul>
                  </div>
                )}
              </div>
              {/* Light and Dark Mode */}
              {theme === "dark" ? (
                <BiSolidSun className='text-2xl cursor-pointer' onClick={() => setTheme("light")} />
              ) : (
                <BiSolidMoon className='text-2xl cursor-pointer' onClick={() => setTheme("dark")} />
              )}
            </div>
            {/* Mobile Section */}
            <div className='md:hidden flex items-center space-x-4'>
              {theme === "dark" ? (
                <BiSolidSun className='text-2xl cursor-pointer' onClick={() => setTheme("light")} />
              ) : (
                <BiSolidMoon className='text-2xl cursor-pointer' onClick={() => setTheme("dark")} />
              )}
              {showMenu ? (
                <HiMenuAlt1 onClick={toggleMenu} className="text-2xl cursor-pointer" />
              ) : (
                <HiMenuAlt3 onClick={toggleMenu} className="text-2xl cursor-pointer" />
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Side Menu */}
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
}

export default Nav;
