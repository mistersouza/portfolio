import React from 'react'
import { motion } from 'framer-motion'

import WorkExperienceCard from './WorkExperienceCard'

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'   
    >
        <h3 className='absolute top-24 tracking-[20px] text-gray-500 text-2xl'>
          Experience
        </h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
          <WorkExperienceCard />
          <WorkExperienceCard />
          <WorkExperienceCard />
        </div>
    </motion.div>
  )
}

export default WorkExperience