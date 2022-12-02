import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'   
    >
        <h3 className='header'>Experience</h3>

        <div>
            {/* WorkExperienceCard */}
            {/* WorkExperienceCard */}
            {/* WorkExperienceCard */}
        </div>
    </motion.div>
  )
}

export default WorkExperience