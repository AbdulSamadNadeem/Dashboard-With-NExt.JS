"use client"
import Header from '@/app/Modules/Header/Header'
import React, { useContext } from 'react'
import { productsContext } from '@/context/products-context/context'
import Cards from '@/app/Modules/Cards/Cards'
import SideBar from '@/app/Modules/SidebarLayout/SidebarLayout'

const products = () => {
  const data = useContext(productsContext)
  return (
   <>
   <SideBar>
    <Header/>
    <Cards data={data}/>

   </SideBar>
   </>
  )
}

export default products