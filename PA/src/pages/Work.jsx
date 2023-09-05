import React from 'react'
import { GrLinkNext } from 'react-icons/gr'
import { BsFillCircleFill } from 'react-icons/bs'


export default function Work() {
  return (
    <div className='flex justify-center items-center h-screen w-screen xl:p-24 md:p-16'>
        <div className='grid md:grid-cols-2 gap-8 max-w-8xl p-8'>
            <div className='w-full'>
                <h4 className='font-bold text-6xl text-gray-200'>My Works.</h4>
                <h5 className='text-xl text-gray-500 pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto sunt aliquam, facere in dolore placeat.</h5>
            </div>
            <div className=' text-gray-200 p-4 grid md:grid-cols-2 grid-cols-1 gap-4 h-full'>
                <div className='relative items-center overflow-hidden rounded-xl group'>
                    <img className='rounded-xl group-hover:opacity-10 duration-500' src="/adminpanel.png" alt="" />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <a href="" className='flex items-center text-gray-200'>
                            <p className='text-xl'>LIVE PROJECT</p>
                            <GrLinkNext className='pl-2 text-4xl'/>
                        </a>
                    </div>
                </div>
                <div className='relative items-center overflow-hidden rounded-xl group'>
                    <img className='rounded-xl group-hover:opacity-10 duration-500' src="/adminpanel.png" alt="" />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <a href="" className='flex items-center text-gray-200'>
                            <p className='text-xl'>LIVE PROJECT</p>
                            <GrLinkNext className='pl-2 text-4xl'/>
                        </a>
                    </div>
                </div>
                <div className='relative items-center overflow-hidden rounded-xl group'>
                    <img className='rounded-xl group-hover:opacity-10 duration-500' src="/adminpanel.png" alt="" />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <a href="" className='flex items-center text-gray-200'>
                            <p className='text-xl'>LIVE PROJECT</p>
                            <GrLinkNext className='pl-2 text-4xl'/>
                        </a>
                    </div>
                </div>
                <div className='relative items-center overflow-hidden rounded-xl group'>
                    <img className='rounded-xl group-hover:opacity-10 duration-500' src="/adminpanel.png" alt="" />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <a href="" className='flex items-center text-gray-200'>
                            <p className='text-xl'>LIVE PROJECT</p>
                            <GrLinkNext className='pl-2 text-4xl'/>
                        </a>
                    </div>
                </div>  
                <div className='flex items-center justify-center col-start-1 col-end-3'>
                    <BsFillCircleFill className='pr-2 hover:scale-150 duration-100'/>
                    <BsFillCircleFill className='pl-2 hover:scale-150 duration-100'/>
                </div>             
            </div>
        </div>
    </div>
  )
}
