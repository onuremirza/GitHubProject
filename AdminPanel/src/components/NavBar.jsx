import React from 'react'
import { AiOutlineUser, AiOutlineMenu, AiOutlineHome, AiOutlineTeam, AiFillContacts, AiFillPieChart, AiOutlineBarChart, AiOutlineLineChart, AiOutlineRadarChart } from 'react-icons/ai'
import { FaFileInvoiceDollar, FaQuestionCircle } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'
const NavBar = () => {
  return (
    <div className=' h-screen w-72 bg-[#61677A] flex-col text-[#EEEEEE]'>
        <div className='flex justify-between pt-6 px-12 items-center'>
          <h1 className='text-xl font-bold'>Admin Panel</h1>
          <AiOutlineMenu className='hover:scale-125 duration-500 hover:text-[#00ADB5]'/>
        </div>

        <div className='flex flex-col items-center p-6'>
          <div className=' rounded-full bg-[#222831] p-16 mb-4'>Photo</div>
          <h2 className='text-xl font-bold'>Onur Emirza</h2>
          <h3 className='text-xl font-bold text-[#00ADB5]'>VP Admin</h3>
        </div>

        <div className='flex-col px-6 py-12'>
          <div className='flex border-y border-transparent items-center p-2 hover:border-y hover:border-[#00adb5] duration-500'>
            <AiOutlineHome size={25}/>
            <h4 className='pl-4'>Dashboard</h4>
          </div>
        </div>
        <div className='flex-col px-6'>
          <h3 className='font-bold text-[#222831]'>Data</h3>
          <div className='flex border-y border-transparent items-center p-2 my-2 hover:border-y hover:border-[#00adb5] duration-500'>
            <AiOutlineTeam size={25}/>
            <h4 className='pl-4'>Manage Team</h4>
          </div>
          <div className='flex border-y border-transparent items-center p-2 my-2 hover:border-y hover:border-[#00adb5] duration-500'>
            <AiFillContacts size={25}/>
            <h4 className='pl-4'>Contacts Information</h4>
          </div>
          <div className='flex border-y border-transparent items-center p-2 my-2 hover:border-y hover:border-[#00adb5] duration-500'>
            <FaFileInvoiceDollar size={25}/>
            <h4 className='pl-4'>Invoices Balances</h4>
          </div>


          <h3 className='font-bold text-[#222831]'>Pages</h3>
          <div className='flex border-y border-transparent items-center p-2 my-2 hover:border-y hover:border-[#00adb5] duration-500'>
            <AiOutlineUser size={25}/>
            <h4 className='pl-4'>Profile Form</h4>
          </div>
          <div className='flex border-y border-transparent items-center p-2 my-2 hover:border-y hover:border-[#00adb5] duration-500'>
            <SlCalender size={25}/>
            <h4 className='pl-4'>Calendar</h4>
          </div>
          <div className='flex border-y border-transparent items-center p-2 my-2 hover:border-y hover:border-[#00adb5] duration-500'>
            <FaQuestionCircle size={25}/>
            <h4 className='pl-4'>FAQ Page</h4>
          </div>

          <h3 className='font-bold text-[#222831]'>Chart</h3>
          <div className='flex border-y border-transparent items-center p-2 my-2 hover:border-y hover:border-[#00adb5] duration-500'>
            <AiOutlineBarChart size={25}/>
            <h4 className='pl-4'>Bar Chart</h4>
          </div>
          <div className='flex border-y border-transparent items-center p-2 my-2 hover:border-y hover:border-[#00adb5] duration-500'>
            <AiFillPieChart size={25}/>
            <h4 className='pl-4'>Pie Chart</h4>
          </div>
          <div className='flex border-y border-transparent items-center p-2 my-2 hover:border-y hover:border-[#00adb5] duration-500'>
            <AiOutlineLineChart size={25}/>
            <h4 className='pl-4'>Line Chart</h4>
          </div>
          <div className='flex border-y border-transparent items-center p-2 my-2 hover:border-y hover:border-[#00adb5] duration-500'>
            <AiOutlineRadarChart size={25}/>
            <h4 className='pl-4'>Geography Chart</h4>
          </div>
        </div>
    </div>
  )
}

export default NavBar