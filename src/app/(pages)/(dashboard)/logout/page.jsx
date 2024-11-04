"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import {auth , signOut} from '../../../../Auth/firebase'


const logout = () => {

  const router = useRouter()
  const Logout =()=>{
    signOut(auth).then(() => {
       router.push('/')
    }).catch((error) => {
      console.log(error)
    });
    
  }
  return (
  

    
   <div className='flex justify-center items-center h-screen'>
     <div className='flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-light text-center'>Are You Sure To LogOut </h1>
      <button className='w-56 h-20 border border-red-500 bg-red-700 text-white text-2xl font-light rounded-xl gap-6 hover:bg-red-500 ' onClick={Logout}>LogOut</button>
    </div>
   </div>
    
  )
}

export default logout