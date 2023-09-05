import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import SideBar from './SideBar'

export default function Layout() {
  return (
    <div>
      <div className='z-1'>
        <Navbar/>    
        <SideBar/>
      </div>      
      <img src="/background.jpg" alt="" className='absolute z-[-1] scale-x-[-1] w-full h-screen  object-left'/>
      <div className='z-1'><Outlet/></div>       
    </div>
  )
}
