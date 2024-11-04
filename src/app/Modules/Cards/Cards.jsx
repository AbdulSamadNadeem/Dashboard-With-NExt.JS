import React from 'react'
const Cards = ({data}) => {
   console.log(data.data.products)
  return (
    <>
    <div className='flex flex-wrap justify-between items-center my-10'>
    {data?.data?.products?.map((item)=>{
                return(
                    <>
                    <div key={item.id} className='border-2 w-80 h-80 rounded-xl flex flex-col items-center my-10'>
                           <div className='w-1/2'>
                             <img src={item.image} alt="" />
                           </div>
                           <div className='w-1/2 overflow-hidden text-center'>
                              <h1>{item.title}</h1>
                              <p>{item.description}</p>
                           </div>
                           <hr className='border-b-2 border-black'/>
                           <button className='w-52 h-12 mb-6 border-2 border-blue-300 bg-blue-500 text-white font-light text-xl rounded-xl hover:bg-black hover:border-blue-500 hover:text-blue-500'>Buy Now</button>
                   </div>
                    </>
                )
            })

           }
    </div>
    </>
  )
}

export default Cards