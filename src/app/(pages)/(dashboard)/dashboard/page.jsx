"use client"
import SideBar from '@/app/Modules/SidebarLayout/SidebarLayout'
import React, { useEffect } from 'react'
import {auth, onAuthStateChanged } from '../../../../Auth/firebase'


const dashboard = () => {
  useEffect(()=>{
      
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/dashboard')
      }
        
    });
  
  
  })
  return (
     <SideBar/>
  )
}

export default dashboard