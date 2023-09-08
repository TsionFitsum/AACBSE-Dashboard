import React from 'react'
import { Sidebardata } from './Sidebardata'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import classNames from 'classnames';
import * as HiIcons from "react-icons/hi";

const linkClasses='flex  items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base text-white';

export default function Sidebar() {

const navigate=useNavigate();

  return (
    <div className='bg-blue-500 w-64 h-screen p-3 flex flex-col text-white overflow-y-auto'>
         <div className='flex flex-col gap-0.5 pt-2 border-b border-neutral-100'>
        <div className='flex items-center gap-2 px-1 py-3'>
            <span className='text-nuetral-100 text-lg '>AACBSE ADMIN </span>
        </div>
        </div>

        <div className='flex-1 py-8 flex flex-col gap-5'>
            {Sidebardata.map((item) => (
                <SidebarLink key={item.key} item={item} />
                    
            ))}
        </div>
        <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-100'>

        <div className={classNames( ' text-white cursor-pointer',linkClasses) }> 
        <button className='text-xl' onClick={()=>navigate('/')}><HiIcons.HiOutlineLogout /></button>
        Logout
        </div>

        </div>
    </div>
  )

function SidebarLink({item}) {

        const {pathname}=useLocation()


    return(
        <Link to={item.path} className={classNames(pathname === item.path ? 'bg-white text-blue-800': ' text-white',linkClasses) }> 
        <span className='text-xl'>{item.icon}</span>
        {item.title}
        </Link>
    )
}

}

 