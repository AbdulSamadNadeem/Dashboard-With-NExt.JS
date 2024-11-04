import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { DashboardIcon } from "@radix-ui/react-icons"
import { BadgeDollarSign, ChartNoAxesCombined, ListOrdered, LogOut, MonitorUp, ShoppingCart } from "lucide-react"
  const items = [
    {
      title: "Products",
      icon: ShoppingCart ,
      url:'/products'
    },
    {
      title: "Analytics",
      icon: ChartNoAxesCombined,
      url:'/analytics'
    },
    {
      title: "Payments",
      icon: BadgeDollarSign,
      url:'/payment'
    },
    {
      title: "Order",
      icon: ListOrdered,
      url:'/order'
    },
    {
      title: "Marketing",
      icon: MonitorUp ,
      url:'/marketing'
    },
    {
      title: "Logout",
      icon: LogOut,
      url:'/logout'
    },
  ]
   
export function AppSidebar() {
  return (

             <Sidebar>
      <SidebarContent>
      <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  
   
  )
}