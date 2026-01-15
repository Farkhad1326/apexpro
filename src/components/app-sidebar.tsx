import * as React from "react"
import {
  LayoutDashboard,
  Dumbbell,
  Utensils,
  LineChart,
  ShoppingBag,
  Settings,
  LogOut,
  User,
  Zap,
  Activity,
  PanelLeftClose,
  Home
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/shared/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/shared/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/shared/dropdown-menu"
import { useLocation, Link } from "react-router-dom"

const data = {
  main: [
    { title: "Overview", url: "/dashboard", icon: LayoutDashboard },
    { title: "My Routine", url: "/dashboard/routines", icon: Activity },
    { title: "My Exercises", url: "/dashboard/exercises", icon: Dumbbell },
  ],
  analytics: [
    { title: "Diet & Nutrition", url: "/dashboard/diet", icon: Utensils },
    { title: "Progress Tracker", url: "/dashboard/progress", icon: LineChart },
  ],
  other: [
    { title: "Store & Plans", url: "/dashboard/store", icon: ShoppingBag },
    { title: "Settings", url: "/dashboard/settings", icon: Settings },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation?.(); 
  const currentPath = location?.pathname || "/";
  const { toggleSidebar, isMobile } = useSidebar(); 

  return (
    <Sidebar 
      collapsible="icon" 
      // 🛑 SENIOR FIX: "md:!relative" -> Bu kod Sidebar-ı "Havada qalmaqdan" xilas edir və yerə endirir.
      className="border-r border-white/5 bg-black md:!relative fixed inset-y-0 z-50" 
      {...props}
    >
      <SidebarContent className="gap-2 px-3 pt-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        {/* LOGO & TOGGLE */}
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
                onClick={toggleSidebar} 
                className="group data-[state=open]:bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl mb-4 border border-transparent hover:border-white/5"
                tooltip="Toggle Sidebar"
              >
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-black shadow-[0_0_12px_rgba(212,244,88,0.4)] transition-transform group-hover:scale-105">
                  <Zap className="size-5 font-black fill-current" />
                </div>
                <div className="flex flex-1 items-center justify-between text-left leading-tight group-data-[collapsible=icon]:hidden pl-1">
                  <div>
                    <span className="block font-black text-lg tracking-tight text-white">APEX</span>
                    <span className="block text-[9px] font-bold text-primary tracking-[0.25em] uppercase">Pro Fitness</span>
                  </div>
                  {!isMobile && <PanelLeftClose className="size-4 text-gray-500 hover:text-white transition-colors" />}
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* MENUS */}
        <SidebarGroup>
          <SidebarMenu className="gap-1">
            {data.main.map((item) => <MenuItem key={item.title} item={item} currentPath={currentPath} />)}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
           <div className="px-2 py-1.5 text-[10px] font-bold text-neutral-600 uppercase tracking-widest group-data-[collapsible=icon]:hidden">Analytics</div>
          <SidebarMenu className="gap-1">
            {data.analytics.map((item) => <MenuItem key={item.title} item={item} currentPath={currentPath} />)}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
           <div className="px-2 py-1.5 text-[10px] font-bold text-neutral-600 uppercase tracking-widest group-data-[collapsible=icon]:hidden">General</div>
          <SidebarMenu className="gap-1">
            {data.other.map((item) => <MenuItem key={item.title} item={item} currentPath={currentPath} />)}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter className="p-3 pb-4 gap-2">
        <SidebarMenu>
           <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Back to Website" className="hover:bg-white/10 hover:text-white text-gray-400 h-10 rounded-lg">
                <Link to="/">
                    <Home className="size-4.5" />
                    <span>Back to Website</span>
                </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg" className="h-12 data-[state=open]:bg-white/5 hover:bg-white/5 transition-all duration-300 rounded-xl border border-transparent hover:border-white/5">
                  <Avatar className="h-8 w-8 rounded-lg border border-white/10">
                    <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                    <AvatarFallback className="rounded-lg bg-neutral-800 text-white">EM</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                    <span className="truncate font-bold text-white">Emil Məmmədov</span>
                    <span className="truncate text-xs text-gray-500">Pro Member</span>
                  </div>
                  <Settings className="ml-auto size-4 text-gray-600 group-data-[collapsible=icon]:hidden" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-xl bg-neutral-900 border-white/10 text-white" side="bottom" align="end" sideOffset={4}>
                <DropdownMenuItem className="focus:bg-white/10 cursor-pointer"><User className="mr-2 h-4 w-4" /> Account</DropdownMenuItem>
                <DropdownMenuItem className="text-red-500 focus:bg-red-500/10 cursor-pointer"><LogOut className="mr-2 h-4 w-4" /> Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

function MenuItem({ item, currentPath }: { item: any, currentPath: string }) {
  const isActive = currentPath === item.url;
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={isActive} tooltip={item.title} className={`relative h-10 text-sm font-medium transition-all duration-200 rounded-lg group ${isActive ? "bg-primary/10 text-primary" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>
        <Link to={item.url} className="flex items-center gap-3 px-2">
          {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-primary rounded-r-full shadow-[0_0_8px_#D4F458]"></div>}
          <item.icon className={`size-4.5 transition-transform group-hover:scale-110 ${isActive ? "text-primary drop-shadow-[0_0_5px_rgba(212,244,88,0.5)]" : "text-gray-500 group-hover:text-gray-300"}`} />
          <span className="truncate">{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}