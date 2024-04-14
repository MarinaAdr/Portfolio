import { Bars3Icon } from '@heroicons/react/24/solid'
import React from 'react'

interface Props {
  openNav:()=>void;
}

const Nav = ({openNav}:Props) => {
  return (
    <div className='w-[100%] sticky z-[100] top-0 h-[12vh] bg-[#c8c8d7] shadow-md'>
        <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
            <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'> WEB
                <span className='text-pink-500'> DEV</span>
            </h1>
            <div className='nav-link'>Home</div>
            <div className='nav-link'>SERVICES</div>
            <div className='nav-link'>ABOUT</div>
            <div className='nav-link'>PROJECTS</div>
            <div className='nav-link'>CONTACT</div>
            <div onClick={openNav}>
                <Bars3Icon className='w-[2rem] h-[2rem] md:hidden cursor-pointer text-pink-500'/>
            </div>
        </div>
    </div>
  )
}

export default Nav