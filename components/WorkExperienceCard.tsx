import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { Experience } from '../sanity/typings'
import { urlForImage } from '../sanity/lib/sanity.image'

type Props = {
    experience: Experience
}

const WorkExperienceCard = ({ experience }: Props) => {

  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#f0ecec] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.div
            initial={{ 
                y: -100,
                opacity: 0 
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <Image 
                className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src={urlForImage(experience.logo)?.url()!}
                width={200}
                height={200}
                alt={experience.company} 
            />
        </motion.div>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Full-stack Web developer graduate</h4>
            <p className='font-bold text-2xl mt-1'>DCI</p>
            <div className='flex space-x-2 my-2'>
               {experience.technologies.map(technology => (
                     <Image
                        className='h-10 w-10 object-cover object-center'
                        key={technology._id}
                        src={urlForImage(technology.icon)?.url()!}
                        width={150}
                        height={150}
                        alt={technology.name}
                    />    
                ))}
            </div>
            <p className='uppercase py-5 text-gray-300'>
                {new Date(experience.dateStarted).toDateString()} - 
                {experience.isCurrentWork 
                    ? 'Present' 
                    : new Date(experience.dateEnded).toDateString()}
            </p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                {experience.points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  ); 
}

export default WorkExperienceCard