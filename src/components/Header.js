import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
//import { useNavigate } from 'react-router-dom'
//import {Menu} from '@headlessui/react';
import Login from '../pages/Login';

export default function Header(username) {



  return (
    <div className='bg-white h-[64px] min-h-[64px] px-4 flex justify-between items-center border-b border-gray-200'>
        <div className='relative'>
            
        </div>
       
        <div className='flex items-center gap-2 mr-2'>
        <div as="div" className="relative inline-block text-left">
        <div>
          
            <div className='h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center'>
            </div>
            <span className='text-black'>{Login.username}</span>
          
        </div>
        </div>

        </div>
        </div>
  )
}
