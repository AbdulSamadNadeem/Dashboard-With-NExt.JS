import { AppSidebar } from '@/app/Modules/Sidebar/Sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

const SideBar = ({children}) => {
  return (
    <SidebarProvider>
    <AppSidebar />
    <main>
      <SidebarTrigger />
      {children}
    </main>
  </SidebarProvider>
  )
}

export default SideBar