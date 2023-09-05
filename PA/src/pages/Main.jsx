import React from 'react'

export default function Main() {
  return (
    <div>
      <div className='relative h-screen w-screen text-gray-200'>
        <div className='hidden md:block absolute top-64 left-32 p-4 w-2/4'>
            <h2 className='break-word text-bold text-6xl'>Transforming Ideas <b className=' text-red-500'>Into Digital Reality</b> </h2>
            <h3 className=' break-word pt-6 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias eum facilis pariatur aperiam iure?</h3>
            {/* <div className='pt-24 '>
                <div className=' shadow-lg rounded-full shadow-red-500 w-32 h-32 text-center justify-center items-center flex'>
                    <a href=""><h4 className=' text-red-500'>My Projects</h4></a>
                </div>
            </div> */}
        </div>
      </div>
      <div className='absolute top-0 right-0'>
        <div className='md:hidden flex flex-col h-screen items-center justify-center text-center p-6 w-screen text-gray-200'>
              <h2 className='break-word text-bold text-xl'>Transforming Ideas <b className=' text-red-500'>Into Digital Reality</b> </h2>
              <h3 className=' break-word pt-6 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias eum facilis pariatur aperiam iure?</h3>
              {/* <div className='pt-24 '>
                  <div className=' shadow-lg rounded-full shadow-red-500 w-32 h-32 text-center justify-center items-center flex'>
                      <a href=""><h4 className=' text-red-500'>My Projects</h4></a>
                  </div>
              </div> */}
        </div>
      </div>
    </div>
    
  )
}
