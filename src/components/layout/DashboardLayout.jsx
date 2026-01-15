import React from "react"
import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/shared/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/shared/separator"

export default function DashboardLayout() {
  return (
    <SidebarProvider defaultOpen={true}>
      
      {/* ANA LAYOUT KONTEYNERİ (Flexbox)
         h-screen: Ekran boyu hündürlük.
         overflow-hidden: Çöldə scroll olmasın.
      */}
      <div className="flex h-screen w-full bg-black overflow-hidden">
        
        {/* 1. SIDEBAR 
           AppSidebar-ın içində "md:!relative" olduğu üçün 
           Flexbox onu fiziki bir sütun kimi görür.
        */}
        <AppSidebar />
        
        {/* 2. MAIN CONTENT 
           flex-1: Qalan bütün boş yeri tutur.
           min-w-0: Flexbox-da sürüşmənin qarşısını alan vacib hack.
        */}
        <main className="flex-1 flex flex-col h-full min-w-0 overflow-y-auto relative transition-all duration-300 ease-in-out">
          
          {/* HEADER (Yalnız Mobile) */}
          <header className="flex h-14 shrink-0 items-center gap-2 border-b border-white/5 bg-black/50 backdrop-blur-md px-4 sticky top-0 z-50 md:hidden">
            <SidebarTrigger className="-ml-1 text-white hover:bg-white/10" />
            <Separator orientation="vertical" className="mr-2 h-4 bg-white/10" />
            <span className="font-semibold text-white text-sm">Dashboard</span>
          </header>

          {/* DİNAMİK MƏZMUN (Outlet) */}
          <div className="flex-1 p-4 md:p-8 text-white w-full mx-auto">
             <Outlet />
          </div>

        </main>
      </div>
    </SidebarProvider>
  )
}