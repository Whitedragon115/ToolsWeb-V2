'use client';

//@ts-ignore
import 'animate.css'
import NormalLoader from '@/components/utils/OpenLoader-2'
import { AppSidebar } from './sidebar';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaDiscord, FaFilter, FaGithub, FaLine, FaSearch } from 'react-icons/fa';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';

const item_sort = [
    { label: "Old to New", value: "old_to_new" },
    { label: "New to Old", value: "new_to_old" },
    { label: "A to Z", value: "a_to_z" },
    { label: "Z to A", value: "z_to_a" },
    { label: "Most Used", value: "most_used" },
    { label: "Least Used", value: "least_used" },
]

const item_sort_category = [
    { label: "Common", value: "common" },
    { label: "Coding", value: "coding" },
    { label: "Network", value: "network" },
]

export default function tools() {
    return (
        // <NormalLoader>
        <SidebarProvider className="dark">
            <AppSidebar/>

            <SidebarInset className='bg-gray-950'>
                <div className='w-auto h-full bg-gray-950 border-l-2 border-gray-800 ml-5 flex flex-col'>
                    <div className='w-full h-24 bg-gray-900 border-b-2 border-gray-800 flex items-center justify-between p-6'>
                        <Button variant='outline' size='default' className='text-white'>
                            <Settings /> Settings
                        </Button>
                        <div className='w-auto h-full flex flex-row-reverse gap-2 items-center justify-center'>
                            <Button variant='outline' size='default' className='text-white'>
                                <FaGithub />
                            </Button>
                            <Button variant='outline' size='default' className='text-white'>
                                <FaDiscord />
                            </Button>
                            <InputGroup className='text-white'>
                                <InputGroupInput placeholder='Search' onChange={() => { }} />
                                <InputGroupAddon>
                                    <FaSearch className='text-white' />
                                </InputGroupAddon>
                                <InputGroupAddon align='inline-end'>
                                    12 results
                                </InputGroupAddon>
                            </InputGroup>
                        </div>
                    </div>
                    <div className='w-full h-full bg-gray-900 flex flex-col gap-4 p-8'>
                        <div className='flex flex-row-reverse gap-2 w-auto h-min'>
                            <Select>
                                <SelectTrigger className="w-[120px]">
                                    <SelectValue placeholder="Filter" />
                                </SelectTrigger>
                                <SelectContent className='dark bg-gray-900'>
                                    <SelectGroup>
                                        <SelectLabel>Sort</SelectLabel>
                                        {item_sort.map((item) => (
                                            <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-[120px]">
                                    <SelectValue placeholder="Category" />
                                </SelectTrigger>
                                <SelectContent className='dark bg-gray-900'>
                                    <SelectGroup>
                                        <SelectLabel>Category</SelectLabel>
                                        {item_sort_category.map((item) => (
                                            <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='w-full h-full bg-gray-700 grid grid-cols-3 gap-4'>
                            <div className='bg-gray-800 h-32 rounded-lg' />
                        </div>
                    </div>
                </div>
            </SidebarInset>

        </SidebarProvider>
        // </NormalLoader>
    );
}