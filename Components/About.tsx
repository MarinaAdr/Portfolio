import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'
import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <div className='bg-slate-200 pb-[3rem] pt-[4rem] md:pt-[8rem]'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
            <div>
                <h1 className='text-[30px] font-bold text-pink-600 mb-[1rem]'>
                    A PROPOS DE MOI
                </h1>
                <h2 className='text-[20px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-slate-600'>
                    Transformation de la <span className='text-[#34d7f4]'>Vision</span>
                </h2>
                <div className='mb-[3rem] flex items-center md:space-x-10'>
                    <span className='w-[100px] hidden md:block h-[5px] bg-slate-500 rounded-sm'></span>
                    <p className='text-[19px] text-slate-500 w-[80%]'>
                    Dans l'univers informatique, chaque vision est une invitation à la révolution. 
                    Des idées prennent forme en lignes de code, transformant nos aspirations en réalités numériques. 
                    C'est ainsi que nous façonnons un avenir où l'imagination est la seule limite
                    </p>
                </div>
                <button className='px-[2rem] hover:bg-slate-400 transition-all duration-150 py-[1rem] text-[18px] font-bold uppercase bg-[#2bd9e6] text-black flex items-center space-x-2'>
                    <p>Telecharger CV</p>
                    <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
                </button>
            </div>
            <div className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] h-[300px] relative'>
                <Image src="/images/profil.jpg" alt='user' layout='fill' objectFit='contain' className='relative z-[11] w-[100%] object-contain '/>
            <div className='absolute w-[100%] h-[80%] bg-pink-600 top-[2.7rem] right-[-2rem]'></div>
            </div>
        </div>
    </div>
  )
}

export default About