import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Background = (props: Props) => {
  return (
    <motion.div 
        className='relative flex justify-center items-center'
        initial={{ opacity: 0 }}
        animate={{ scale: [1, 2, 2, 3, 1], opacity: [0.1, 0.2, 0.8, 0.1, 1.0], borderRadius: ['20%', '20%', '50%', '80%', '20%'] }}
        transition={{duration: 2.5}}
        
    >
        <div className='absolute rounded-full mt-52 border border-[#f5f5f5] h-[200px] w-[200px] animate-ping'/>
        <div className='absolute rounded-full mt-52 border border-[border-[#f5f5f5]] h-[300px] w-[300px]'/>
        <div className='absolute rounded-full mt-52 border border-[border-[#f5f5f5]] h-[500px] w-[500px]'/>
        <div className='absolute rounded-full mt-52 border border-purple-500 h-[650px] w-[650px] animate-pulse opacity-40'/>
        <div className='absolute rounded-full mt-52 border border-[border-[#f5f5f5]] h-[800px] w-[800px]'/>
    </motion.div>
  )
}

export default Background