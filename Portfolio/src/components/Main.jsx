import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="./src/img/background.jpg" alt="/" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/25'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-[#d0d0d0]'>I'm Onur Emirza</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-[#d0d0d0]'>
                <TypeAnimation
                    sequence={[
                        2000,
                        "I'm a Developer",
                        2000, 
                        "I'm a Coder",
                        2000,
                        "I'm a Tech Enthusiast",
                    ]}
                    wrapper="div"
                    cursor={true}
                    speed={50}
                    style={{ fontSize: '1em'}}
                    repeat={Infinity}
                />
                </h2>
                <div className=' flex justify-between pt-6 max-w-[200px] w-full text-[#d0d0d0]'>
                    <FaTwitter className='cursor-pointer hover:scale-150 ease-in duration-500 hover:text-blue-300' size={20}/>
                    <FaFacebookF className='cursor-pointer hover:scale-150 ease-in duration-500 hover:text-blue-300' size={20}/>
                    <FaInstagram className='cursor-pointer hover:scale-150 ease-in duration-500 hover:text-blue-300' size={20}/>
                    <FaLinkedinIn className='cursor-pointer hover:scale-150 ease-in duration-500 hover:text-blue-300' size={20}/>
                    <FaGithub className='cursor-pointer hover:scale-150 ease-in duration-500 hover:text-blue-300' size={20}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main