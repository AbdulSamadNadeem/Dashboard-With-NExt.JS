import React from 'react'
import { Bell , MessageCircle  } from 'lucide-react';

const Header = () => {
  return (
    <>
    <div className='border w-[1000px] h-16 flex items-center justify-between'>
        <div>
            <h1 className='text-3xl font-light'>Hi , How Are you</h1>
        </div>
        <div className='flex gap-8'>
        <ul className='flex gap-8'>
            <li><i><Bell/></i></li>
            <li><i><MessageCircle/></i></li>
        </ul>
            <input type="text" placeholder='Search Here' className='w-72 border border-black rounded-xl' />
        </div>
    </div>
    
    </>
  )
}

export default Header