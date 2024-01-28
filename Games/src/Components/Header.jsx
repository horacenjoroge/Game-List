import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import { HiMagnifyingGlass } from "react-icons/hi2"
import { FaMoon } from "react-icons/fa";
import { HiSun } from "react-icons/hi";
function Header() {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='flex items-center p-3'>
            <img src={logo} width={60} height={60} />
            <div className='flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full'>
                <HiMagnifyingGlass />
                <input type='text' placeholder='Search Games' className='dark:bg-emerald-500 bg-transparent outline-none px-2' />
            </div>
            <div>
                {toggle ? < HiSun className='text-[35] bg-slate-200 text-black p-1 rounded-full cursor-pointer' onClick={() => setToggle(!toggle)} /> : < FaMoon onClick={() => setToggle(!toggle)} className='text-[35] bg-slate-200 text-black p-1 rounded-full cursor-pointer' />}
              

            </div>
        </div>
    )
}

export default Header
