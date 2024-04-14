import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav: React.FC<Props> = ({ nav, closeNav }) => {
    const navAnimation = nav ? 'translate-x-0' : 'translate-x-[100%]';
    return (
        <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#c8c8d7]`}>
            <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
                <div className='nav-link-mobile'>HOME</div>
                <div className='nav-link-mobile'>SERVICES</div>
                <div className='nav-link-mobile'>A PROPOS</div>
                <div className='nav-link-mobile'>PROJECTS</div>
                <div className='nav-link-mobile'>CONTACT</div>
            </div>
            <div onClick={closeNav} className='absolute z-[10000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-pink-600'>
                <XMarkIcon />
            </div>
        </div>
    );
};

export default MobileNav;
