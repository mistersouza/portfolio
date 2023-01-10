import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { SocialMedia } from '../sanity/typings'

type Props = {
  social: SocialMedia[]
}

function Header({ social }: Props) {
  return (
    <header className='flex flex-row justify-between max-w-7xl mx-auto sticky top-0 z-10 xl-items-center p-5'>
        <motion.div 
            initial={{ x: -500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-row items-center'>
            {/* Social Media icons */}
            {social.map((socialMedia) => (
                <SocialIcon 
                  key={socialMedia._id}
                  url={socialMedia.url}
                  fgColor='gray' 
                  bgColor='transparent'
                />
            ))}
        </motion.div>

        <Link href='#contact'>
          <motion.div 
              initial={{ x: 500, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className='flex flex-row items-center text-gray-300 cursor-pointer'>
              {/* Contact me */}
              <SocialIcon
                  network='email'
                  fgColor='gray'
                  bgColor='transparent'
              />
              <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
          </motion.div>
        </Link>
    </header>
  )
}

export default Header