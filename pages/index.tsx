import Nav from '@/Components/Nav';
import React, { useState } from 'react';
import MobileNav from '@/Components/MobileNav';
import Hero from '@/Components/Hero';

const HomePage = () => {

  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <div className='overflow-x-hidden'>
      <div>
        {/* Navbar section */}
        <MobileNav nav={nav} closeNav={closeNav}/>
        <Nav openNav={openNav}/>
        {/* Hero section */}
        <Hero/>
        <div>
          {/* About */}
        </div>
      </div>
    </div>
  )
}

export default HomePage