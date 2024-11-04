"use client"
import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import {auth , createUserWithEmailAndPassword ,onAuthStateChanged } from '../../../Auth/firebase.js'
import { useRouter } from 'next/navigation'

const Forms = () => {
  const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
      } = useForm()
    
   
 
      const onSubmit = async (data) => {
        reset()
        console.log(data)
         try{
                 const userCredential  = await createUserWithEmailAndPassword(auth , data.email , data.password)              
                 console.log(userCredential.user)
         }catch(e){
          console.log(e)
         }
      };
       useEffect(()=>{
      
          onAuthStateChanged(auth, (user) => {
            if (user) {
              router.push('/products')
            }
              
          });
       
       
       })
  return (

    <>
  <div className='flex justify-center items-center h-screen'>
  <div className='w-80 h-80 bg-blue-300 border-blue-700 flex flex-col items-center gap-10 rounded-lg'>
        <h1 className='text-3xl text-center font-light'>Signup Form</h1>
       <div className=''>
       <form className='flex flex-col items-center gap-10' onSubmit={handleSubmit(onSubmit)}>
      
      <input type='email' className={`border-2 border-l-blue-400 bg-blue-200 ${errors.email? 'border-red-500' : ''}`} placeholder='enter email'  {...register("email" , {required:true })} />
        
      
    
      <input type='password' className={`border-2 border-l-blue-400 bg-blue-200 ${errors.email? 'border-red-500' : ''}`} placeholder='enter email' {...register("password", { required: true })} />
   
      

      <input  className='w-52 h-12 mb-6 border-2 border-blue-300 bg-blue-500 text-white font-light text-xl rounded-xl hover:bg-black hover:border-blue-500 hover:text-blue-500' type="submit" />
    </form>
    
       </div>
       
        
     </div>
  </div>
    </>
  )
}

export default Forms



    