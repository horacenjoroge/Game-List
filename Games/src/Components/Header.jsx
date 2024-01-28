import React from 'react'
import logo from './../assets/Images/logo.png'
import { HiMagnifyingGlass } from "react-icons/hi2"
import { FaMoon } from "react-icons/fa";
function Header() {
  return (
    <div className='flex items-center p-3'>
      <img src={logo} width={60}height={60} />
      <div className='flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full'>
        <HiMagnifyingGlass/>
        <input type = 'text'placeholder='Search Games'className='bg-transparent outline-none px-2'/>
      </div>
      <div>
              < FaMoon/>
      </div>
    </div>
  )
}

export default Header
