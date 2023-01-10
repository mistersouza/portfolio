import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { DevicePhoneMobileIcon, MapPinIcon, AtSymbolIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

type Props = {}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
};

const Contact = (props: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => console.log(formData);

  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
         <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-3xl font-semibold text-center'>
                {'I\'ve got just what you need. '}
                <span className='underline decoration-purple-500/50'>
                    Let's talk
                </span>
            </h4>
            <div className='flex items-center space-x-5 justify-center'>
                <DevicePhoneMobileIcon className='text-purple-500 h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>+49 174 6880037</p>
            </div>
             <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-purple-500 h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>Berlin</p>
            </div>
             <div className='flex items-center space-x-5 justify-center'>
                <AtSymbolIcon className='text-purple-500 h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>mistersouza@icloud.com</p>
            </div>
            <form 
                className='flex flex-col space-y-2 mx-auto w-fit'
                onSubmit={handleSubmit(onSubmit)}
            >
                <fieldset className='flex space-x-2'>
                    <input className='contact-input' type='text' placeholder='Name' {...register('name')} />
                    <input className='contact-input' type='email' placeholder='Email' {...register('email')}/>
                </fieldset>
                <input className='contact-input' type='text' placeholder='Subject' {...register('subject')}/>
                <textarea className='contact-input' placeholder='Message' {...register('message')}/>
                <button className='bg-purple-500 py-3 rounded-md' type='submit'>
                    <PaperAirplaneIcon className='h-8 w-8 mx-auto text-gray-800'/>
                </button>
            </form>
        </div>
    </div>
  )
}

export default Contact