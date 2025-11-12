'use client';

import ShinyText from "@/components/ShinyText";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { group } from "console";
import { Calendar, Inbox, Search, Settings } from "lucide-react"


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

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="w-full h-auto mt-4 flex flex-col justify-center items-center">
          <div className="flex flex-col">
            <span className="text-3xl emfont-FusionPixelFont12pxMono">Dragon Tools</span>
            <div className="flex items-center gap-3">
            <div className="bg-yellow-700 w-3 h-3 rounded-full"/>
            <ShinyText
              className='emfont-FusionPixelFont12pxMono text-sm'
              text="V 0.0.1"
            />
            </div>
          </div>
          <div className="my-2 mt-4 h-px w-[80%] bg-border" />
        </div>
      </SidebarHeader>
      <SidebarContent className="ml-4 mr-2 gap-0">
        {items.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild>
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
    </Sidebar>
  )
}