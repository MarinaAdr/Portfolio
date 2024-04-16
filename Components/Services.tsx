import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Services = () => {
  return (
    <div className='bg-slate-300 pt-[4rem] md:pt-[8rem] pb-[5rem]'>
        <p className='heading'>
            Mes <span className='text-pink-600'>Services</span>
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-black'>
            <div className='bg-purple-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
                <CodeBracketSquareIcon className='w-[6rem] mx-auto text-[#fff]'/>
                <h1 className='text-[20px] md:text-[25px] mt-[1.5rem] mb-[1.5rem]'>Frontend</h1>
                <p className='text-[15px] text-white font-normal'>
                Développement de sites web dynamiques et réactifs, mettant en valeur une expérience utilisateur intuitive et fluide.
                Tests rigoureux sur une variété de navigateurs et d'appareils pour garantir une compatibilité maximale et une expérience homogène
                </p>
            </div>
            <div className='bg-yellow-600 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
                <RocketLaunchIcon className='w-[6rem] mx-auto text-[#fff]'/>
                <h1 className='text-[20px] md:text-[25px] mt-[1.5rem] mb-[1.5rem]'>Backend</h1>
                <p className='text-[15px] text-white font-normal'>
                Développement de solutions backend robustes et évolutives pour répondre aux besoins fonctionnels complexes de vos applications web.
                Formation et documentation pour permettre aux équipes internes ou aux clients de comprendre et de gérer efficacement l'infrastructure et le code backend
                </p>
            </div>
            <div className='bg-cyan-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
                <CommandLineIcon className='w-[6rem] mx-auto text-[#fff]'/>
                <h1 className='text-[20px] md:text-[25px] mt-[1.5rem] mb-[1.5rem]'>Tests</h1>
                <p className='text-[15px] text-white font-normal'>
                L'automatisation des tests est un pilier essentiel du développement logiciel moderne, 
                garantissant la qualité, la fiabilité et la robustesse des applications. 
                Dans ce contexte, CodeceptJS et Selenium émergent comme des outils puissants pour la création et l'exécution de tests automatisés.
                </p>
            </div>

        </div>

    </div>
  )
}

export default Services