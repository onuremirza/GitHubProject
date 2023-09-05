import React from 'react'

import { AiFillHtml5, } from 'react-icons/ai'
import { IoLogoJavascript } from 'react-icons/io'
import { BiLogoReact, BiLogoCss3, BiLogoTailwindCss, BiLogoBootstrap, BiLogoWordpress } from 'react-icons/bi'
import { SiReactrouter, SiHeadlessui, SiVite } from 'react-icons/si'

export default function About() {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
        <div className='md:grid md:grid-cols-2 gap-8 max-w-6xl md:p-8'>
            <div className='w-full text-center md:p-0 p-2'>
                <h4 className='font-bold md:text-6xl text-xl text-gray-200'>Captivating stories birth magnificent designs</h4>
                <h5 className='md:text-xl text-sm text-gray-500 pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto sunt aliquam, facere in dolore placeat.</h5>
                <div className='grid grid-cols-4'>
                    <div className='text-center py-4'>
                        <div className='border-r border-neutral-700'>
                            <p className='font-bold md:text-6xl text-xl text-red-700'>1+</p>
                            <p className='text-gray-400 md:text-lg text-sm'>YEARS OF EXPERIENCE</p>
                        </div>                        
                    </div>
                    <div className='text-center py-4'>
                        <div className=' border-neutral-700'>
                            <p className='font-bold md:text-6xl text-xl text-red-700'>1+</p>
                            <p className='text-gray-400 md:text-lg text-sm'>SATISFIED <br /> CLIENT</p>
                        </div>                        
                    </div>
                    <div className='text-center py-4'>
                        <div className='border-r border-l border-neutral-700'>
                            <p className='font-bold md:text-6xl text-xl text-red-700'>1+</p>
                            <p className='text-gray-400 md:text-lg text-sm'>FINISHED PROJECTS</p>
                        </div>                        
                    </div>
                    <div className='text-center py-4'>
                        <div className=''>
                            <p className='font-bold md:text-6xl text-xl text-red-700'>1+</p>
                            <p className='text-gray-400 md:text-lg text-sm'>WINNING AWARDS</p>
                        </div>                        
                    </div>
                </div>
            </div>
            <div className=' text-gray-200 md:p-4 p-2'>
                <div className='flex md:gap-12 gap-4 text-xl'>
                    <div className='font-bold hover:text-red-700 duration-500'>Skills</div>
                    <div className='font-bold hover:text-red-700 duration-500'>Awards</div>
                    <div className='font-bold hover:text-red-700 duration-500'>Experience</div>
                    <div className='font-bold hover:text-red-700 duration-500'>Credentials</div>
                </div>
                <div className='grid pt-4'>
                    <div className='flex text-lg items-center gap-2'>
                        <p className='text-gray-500'>Web Development -</p>
                        <AiFillHtml5 className='text-xl'/>
                        <BiLogoCss3 className='text-xl'/>
                        <IoLogoJavascript className='text-xl'/>
                        <BiLogoReact className='text-xl'/>
                        <SiReactrouter className='text-xl'/>
                        <BiLogoTailwindCss className='text-xl'/>
                        <BiLogoBootstrap className='text-xl'/>
                        <SiHeadlessui className='text-xl'/>
                        <BiLogoWordpress className='text-xl'/>
                        <SiVite className='text-xl'/>
                    </div>
                    <div>
                        <p className='text-gray-500'>UI/UX Design</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
