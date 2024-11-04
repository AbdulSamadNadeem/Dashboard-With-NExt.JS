'use-client';
const { createContext } = require("react");

export const productsContext = createContext()

import React, { useEffect, useState } from 'react'



const Context = ({children}) => {
  const [data , setData] = useState([])

  const fetchData = async()=>{
    try{
              const response  = await fetch('https://fakestoreapi.in/api/products')
              const data = await response.json()
              setData(data)
    }catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <productsContext.Provider value={{data}}>
           {children}
    </productsContext.Provider>
  )
}

export default Context