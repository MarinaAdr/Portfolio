import React from 'react'
import SkillsItem from './SkillsItem'
import SkillLangages from './SkillLangages'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-slate-200'>
        <h1 className='heading'> Education & <span className='text-pink-600'>COMPETENCES</span>
        </h1>
        <div className='w-[80%] mx-auto pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
            <div>
                <SkillsItem/>
                <SkillsItem/>
                <SkillLangages/>
            </div>
            <div>
                <SkillsItem/>
                <SkillsItem/>
                <SkillLangages/>
            </div>
        </div>
    </div>
  )
}

export default Skills