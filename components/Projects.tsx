import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {
    const projects = ['One', 'Two', 'Three', 'four', 'five']; 
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 1.5, delay: 0.5 }}
        className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {projects.map((project, index) => (
               <motion.div
                    initial={{ y: -125, opacity: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
                    key={project}
               >
                   <Image
                        src='/../public/project-placeholder.png'
                        width={500}
                        height={500}
                        alt={project}
                    />
                    <div className='space-y-10 px-0 md:px-10 max-w-3xl'>
                        <h4 className='text-3xl font-semibold text-center'>
                            <span className='underline decoration-purple-500/50'>
                                Case Study
                            </span>
                            {` ${index + 1}`} of {projects.length}: {project}
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                    </div>
               </motion.div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-purple-500/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects