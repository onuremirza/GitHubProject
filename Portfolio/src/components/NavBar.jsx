import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'
import { GrProjects } from "react-icons/gr"
import { BsPerson } from "react-icons/bs"

const NavBar = () => {
    const[nav,setNav] = useState(false)
    const handleNav = ()=>{
        setNav(!nav);
    };

  return (
    <div>
        <AiOutlineMenu onClick={ handleNav } className=' fixed top-4 right-4 z-[99] md:hidden ' />
            {
                nav ? (
                    <div className=' fixed w-full h-screen bg-white/75 flex flex-col justify-center items-center z-20 '>
                        <a onClick={ handleNav } href="#main" className=' w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easa-in duration-500 '>
                            <AiOutlineHome />
                            <span className='pl-4' >Home</span>
                        </a>
                        <a onClick={ handleNav } href="#work" className=' w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easa-in duration-500 '>
                            <GrProjects />
                            <span className='pl-4' >Work</span>
                        </a>
                        <a onClick={ handleNav } href="#project" className=' w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easa-in duration-500 '>
                            <AiOutlineProject />
                            <span className='pl-4' >Projects</span>
                        </a>
                        <a onClick={ handleNav } href="#person" className=' w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easa-in duration-500 '>
                            <BsPerson />
                            <span className='pl-4' >Resume</span>
                        </a>
                        <a onClick={ handleNav } href="#contact" className=' w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easa-in duration-500 '>
                            <AiOutlineMail />
                            <span className='pl-4' >Contact</span>
                        </a>
                    </div>
                )
                :(
                    ''
                )
            }


            <div className=' md:block hidden fixed top-[25%] right-0 z-10 '>
                <div className=' flex flex-col '>
                    <a href="#main" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easa-in duration-500'>
                        <AiOutlineHome size={20} />
                    </a>
                    <a href="#work" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easa-in duration-500'>
                        <GrProjects size={20} />
                    </a>
                    <a href="#project" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easa-in duration-500'>
                        <AiOutlineProject size={20} />
                    </a>
                    <a href="#person" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easa-in duration-500'>
                        <BsPerson size={20} />
                    </a>
                    <a href="#contact" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easa-in duration-500'>
                        <AiOutlineMail size={20} />
                    </a>
                </div>
            </div>



    </div>
  )
}

export default NavBar