import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
  direction?: 'left' | 'right'
}

const Skill = (props: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.div
        initial={{
          x: props.direction === 'left' ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        >
          <Image
            className='w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
            src='https://symbols.getvecta.com/stencil_25/39_javascript.0ca26ec4ab.svg'
            width={100}
            height={100}
            alt='javascript'
          />
        </motion.div>
        <div className='w-24 h-24 xl:w-32 xl:h-32 absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>100%</p>
          </div>
        </div>
      
    </div>
  )
}

export default Skill