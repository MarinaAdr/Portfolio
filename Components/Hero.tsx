import React from 'react';
import ParticlesComponent from './ParticlesComponent';
import Image from 'next/image';
import TextEffects from './TextEffects';
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/24/solid';

const Hero = () => {
    return (
        <div className="h-[88vh] z-auto bg-cover mt-[10vh] bg-center relative">
            <Image
                src="/images/background.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
            />
            <ParticlesComponent id={undefined} />

            <div className='relative w-[80%] z-10 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
                <div>
                    <h1 className='text-[35px] md:text-[50px] text-black font-bold'>
                        SALUT, Je suis<span className='text-pink-600'> Claudia!</span>
                    </h1>
                   
                    <TextEffects />
                    <p className='mt-[1.7rem] text-[20px] text-slate-800'>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Neque quo tempore, quam, numquam delectus ipsum dignissimos temporibus 
                        repudiandae, eum vitae nihil. Exercitationem expedita cupiditate nemo sequi. 
                        Amet dolor id temporibus.
                    </p>
                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <button className='px-[2rem] hover:bg-slate-400 transition-all duration-150 py-[1rem] text-[18px] font-bold uppercase bg-[#2bd9e6] text-black flex items-center space-x-2'>
                            <p>Telecharger CV</p>
                           <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
                        </button>
                        <button className='flex items-center space-x-2'>
                            <PlayCircleIcon className='w-[4rem] h-[4rem] hover:text-slate-400 transition-all duration-200 text-[#2bd9e6]'/>
                            <p className='text-[20px] font-semibold text-black'>Regarder la video</p>
                        </button>
                    </div>

                </div>
                <div className='w-[500px] hidden bg-slate-500 relative lg:flex items-center rounded-full h-[500px]'>
                    <Image src="/images/avatar.jpg" alt={'user'} layout='fill' className='object-cover rounded-full'/>
                </div>
            </div>
        </div>
    );
};

export default Hero;
