import React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { AboutMe } from '../sanity/typings'
import { urlForImage } from '../lib/sanity.image'

type Props = {
    info: AboutMe
}

const About = ({ info }: Props) => {
  return (
    <motion.div 
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
    >
        <h3 className='header'>About</h3>
        <motion.div 
            className='shrink-0'
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            >   
            <Image 
                className='mb-20 md:mb-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
                src={urlForImage(info?.images[1]).url()}
                alt='Me profile picture'
                priority={true}
                width={500}
                height={500}
            />
        </motion.div>
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className="text-4xl font-semibold">Here's a <span className="underline underline-offset-2">little</span> about me</h4>
            <p className='text-base'>
                {info.bio}
            </p>
        </div>
    </motion.div>

  )
}

export default About