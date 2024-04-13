import { Bars2Icon, Bars3Icon } from '@heroicons/react/24/solid'
import React from 'react'

const Nav = () => {
  return (
    <div className='w-[100%] top-0 h-[12vh] bg-[#0e0e31] shadow-md'>
        <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
            <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'> WEB
                <span className='text-pink-300'> DEV</span>
            </h1>
            <div className='nav-link'>Home</div>
            <div className='nav-link'>SERVICES</div>
            <div className='nav-link'>ABOUT</div>
            <div className='nav-link'>PROJECTS</div>
            <div className='nav-link'>CONTACT</div>
            <div>
                <Bars3Icon className='w-[2rem] h-[2rem] md:hidden cursor-pointer text-pink-300'/>
            </div>
        </div>
    </div>
  )
}

export default Nav