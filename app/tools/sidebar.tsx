'use client';

import ShinyText from "@/components/ShinyText";
import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"
import ClosingLink from "@/components/utils/ClosingLink";
import { group } from "console";
import { Calendar, Inbox, Search, Settings } from "lucide-react"
import { useState } from "react";
import { FaHome, FaOutdent } from "react-icons/fa";


const CommonTools = {
  title: "Common Tools",
  id: "common",
  items: [
    { label: "Base64", icon: Calendar, id: `base64` },
    { label: "Testing1", icon: Settings, id: "test1" },
    { label: "Testing2", icon: Settings, id: "test2" },
    { label: "Testing3", icon: Settings, id: "test3" },
    { label: "Testing4", icon: Settings, id: "test4" },
    { label: "Testing5", icon: Settings, id: "test5" },
  ]
}

const CodingTools = {
  title: "Coding Tools",
  id: "coding",
  items: [
    { label: "JSON Formatter", icon: Inbox, id: "json-formatter" },
    { label: "Testing6", icon: Settings, id: "test6" },
    { label: "Testing7", icon: Settings, id: "test7" },
    { label: "Testing8", icon: Settings, id: "test8" },
  ]
}

const NetworkTools = {
  title: "Network Tools",
  id: "network",
  items: [
    { label: "IP Lookup", icon: Search, id: "ip-lookup" },
    { label: "Testing9", icon: Settings, id: "test9" },
    { label: "Testing10", icon: Settings, id: "test10" },
  ]
}

const items = [
  CommonTools,
  CodingTools,
  NetworkTools,
]

export function AppSidebar() {

  const [sidebar, setSidebar] = useState(true);

  const { toggleSidebar, state: sidebarState } = useSidebar();

  function handleSidebar() {
    toggleSidebar();
    setSidebar(!sidebar);
  }

  return (
    <Sidebar
      collapsible="icon"
      style={{
        '--sidebar-width': '16rem',
        '--sidebar-width-icon': '75px',
        '--sidebar': '#152333',
        '--sidebar-accent': '#122030',
      } as React.CSSProperties}
    >
      <SidebarHeader>
        <div
          className="w-full h-auto mt-4 flex flex-col justify-center items-center transition-all duration-200"
          style={{
            opacity: sidebar ? 1 : 0,
          }}
        >
          <div className="flex flex-col">
            <span className="text-3xl text-nowrap emfont-FusionPixelFont12pxMono">Dragon Tools</span>
            <div className="flex items-center gap-3">
              <div className="bg-yellow-700 w-3 h-3 rounded-full" />
              <ShinyText
                className='emfont-FusionPixelFont12pxMono text-sm'
                text="V 0.0.1"
              />
            </div>
          </div>
          <div className="my-2 mt-4 h-px w-[80%] bg-border" />
        </div>
      </SidebarHeader>
      <SidebarContent className={`gap-0 transition-all duration-200 ${sidebar ? 'ml-4 mr-2' : ''}`}>
        {items.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.label} className="ml-3">
                    <SidebarMenuButton asChild className="transition-all duration-150 ease-in">
                      <a href={`/tools/${group.id}/${item.id}`}>
                        <item.icon />
                        <span>{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <div className="w-auto h-fit rounded-lg flex flex-col items-center justify-center p-2 gap-2 hover:bg-gray-700/5 transition-all duration-100">
          <ClosingLink href="/">
            <Button variant="outline" size="default" className="text-white w-full flex items-center justify-between">
              <FaHome className=" aspect-auto h-full w-auto" />
              <span className="flex-1 text-center transition-all duration-200"
                style={{
                  opacity: sidebar ? 1 : 0
                }}
              >
                Home
              </span>
            </Button>
          </ClosingLink>
          <Button variant="outline" size="default" className="text-white w-full flex items-center justify-between" onClick={handleSidebar}>
            <FaOutdent className=" aspect-auto h-full w-auto" />
            <span className="flex-1 text-center transition-all duration-200"
              style={{
                opacity: sidebar ? 1 : 0
              }}
            >
              Collapse
            </span>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}