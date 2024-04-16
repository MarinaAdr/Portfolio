import Nav from '@/Components/Nav';
import React, { useState } from 'react';
import MobileNav from '@/Components/MobileNav';
import Hero from '@/Components/Hero';
import About from '@/Components/About';
import Services from '@/Components/Services';
import Skills from '../Components/Skills';

const HomePage = () => {

  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <div className='overflow-x-hidden'>
      <div>
        <MobileNav nav={nav} closeNav={closeNav}/>
        <Nav openNav={openNav}/>
        <Hero/>
        <div className='relative z-[30]'>
          <About/>
          <Services/>
          <Skills/>
        </div>
      </div>
    </div>
  )
}

export default HomePage