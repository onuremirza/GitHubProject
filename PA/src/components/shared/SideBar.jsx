import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import {SIDEBAR_LINKS} from '../../lib/consts/Navigation'

const linkClasses = 'hover:bg-white/25 rounded-full p-4'

export default function SideBar() {
  return (
    <div>
      <div className='fixed md:flex hidden flex-col z-10 top-1/4 right-5 bg-white/10 rounded-full p-2 gap-4 text-gray-200'>
        {SIDEBAR_LINKS.map((item)=>(
          <LinkCheck key={item.key} item={item}/>
        ))}
      </div>
      <div className='flex w-screen justify-center'>
        <div className='fixed md:hidden flex flex-row z-10 bottom-2 bg-white/10 rounded-full p-2 gap-2 text-gray-200'>
          {SIDEBAR_LINKS.map((item)=>(
            <LinkCheck key={item.key} item={item}/>
          ))}
        </div>
      </div>      
    </div>    
  )
}

function LinkCheck( {item} ) {
  const { pathname } = useLocation()
  return(
    <Link
    to={item.path}
    className={classNames(
      pathname == item.path ? 'bg-white/25 text-gray-200' : ' text-gray-200' , 
      linkClasses
      )}
    >
      <span className='text-2xl text-gray-200'>{item.icon}</span>

    </Link>
  )
}
