import React from 'react'
import { Bars3Icon, BeakerIcon, GlobeAltIcon, MagnifyingGlassCircleIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-30 grid grid-cols-3 items-center  shadow-md py-3 px-1 sm:px-5">
    <div className="relative flex  h-14 cursor-pointer">
    
      <img src={logo} alt="" className='object-contain object-left'/>
    </div>
    <div className="center flex items-center md:border-2 rounded-full pl-3  bg-transparent  md:shadow-sm">
      <input type="text" placeholder="search for your place" className="flex-grow outline-none text-gray-400"/>
      <MagnifyingGlassCircleIcon className=" hidden md:block w-7 h-7 text-red-400 mx-2 "/>
    </div>

    <div className="right flex gap-4 justify-end">
      <p className="hidden md:inline-block cursor-pointer">Become a Host</p>
      <GlobeAltIcon className="w-7 h-7 text-gray-500"/>
      <div className="flex border-2 rounded-full items-center gap-2">
        <Bars3Icon className="w-7 h-7 text-gray-500"/>
        <UserCircleIcon className="w-7 h-7 text-gray-500"/> 
      </div>
    </div>
  </header>
  )
}

export default Header
