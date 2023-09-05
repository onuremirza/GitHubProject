import React from 'react'
import { NAVBAR_LINKS,SIDEBAR_LINKS } from '../../lib/consts/Navigation'

export default function Navbar() {

  return (
    <div>
        <div className=' flex flex-col md:flex-row fixed w-screen p-4 md:px-32 items-center text-gray-200 z-10 '>
          <h1 className='flex-1 font-bold text-4xl md:text-left text-center'>Onur Emirza</h1>
          <div className='flex md:pt-0 pt-6 gap-12 items-center'>
            {NAVBAR_LINKS.map((item)=>
              <span className='text-3xl cursor-pointer'>{item.icon}</span> 
            )}
          </div>
        </div>

    </div>
  )
}
