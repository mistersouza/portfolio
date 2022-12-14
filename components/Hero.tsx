import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import Background from './Background';

import { PageInfo } from '../sanity/typings'

import { urlForImage } from '../lib/sanity.image'

type Props = {
    pageInfo: PageInfo 
}

const Hero = ({ pageInfo }: Props) => {

    console.log(pageInfo)
    const [text, count] = useTypewriter({
        words: [
            `Hi there, I\'m ${pageInfo.name}`,
            'A-guy-who-loves-reading.tsx',
            '<ButLovesWritingCodeBetter />'
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <motion.div className='flex flex-col h-screen space-y-8 items-center justify-center text-center overflow-hidden'>
        <Background />
        <Image
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt='Me profile picture'
            width={500}
            height={500}
        />
        <div className='flex flex-col z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[0.5rem]'>{pageInfo.role}</h2>
            <h1 className='text-1xl lg:text-2xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#324ab2'/>
            </h1>
            <div className='flex justify-around pt-5'>
                <Link href='#about'>
                    <button className='btn'>About</button>
                </Link>
                <Link href='#experience'>
                    <button className='btn'>Experience</button>
                </Link>
                <Link href='#skills'>
                    <button className='btn'>Skills</button>
                </Link>
                <Link href='#projects'>
                    <button className='btn'>Projects</button>
                </Link>
            </div>
        </div>
    </motion.div>
  )
}

export default Hero