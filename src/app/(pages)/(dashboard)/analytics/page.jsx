import Header from '@/app/Modules/Header/Header'
import SideBar from '@/app/Modules/SidebarLayout/SidebarLayout'
import React from 'react'

const analytics = () => {
  return (
    <SideBar>
      <Header/>
           <div className='flex'>

               <div>
          <img src="/part1.png" alt="" />
             </div>
            <div>
         <img src="/part2.png" alt="" />
        </div>
          </div>
    </SideBar>

  )
}

export default analytics