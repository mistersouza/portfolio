import React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { PageInfo } from '../sanity/typings'

type Props = {
    pageInfo: PageInfo
}

const About = ({ pageInfo }: Props) => {
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
                src='https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                alt='Me profile picture'
                width={500}
                height={500}
            />
        </motion.div>
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className="text-4xl font-semibold">Here's a <span className="underline underline-offset-2">little</span> about me</h4>
            <p className='text-base'>
                {pageInfo.aboutMe}
            </p>
        </div>
    </motion.div>

  )
}

export default About