import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <div className='bg-neutral-100 h-screen flex flex-row w-screen overflow-hidden'>    
        <Sidebar/>  
        <div className='flex flex-col flex-1'>
          <Navbar/>
          <div className='flex-1 p-4 min-h-0 overflow-auto'>
            {<Outlet/>}
          </div>
        </div>                 
    </div>
  )
}
