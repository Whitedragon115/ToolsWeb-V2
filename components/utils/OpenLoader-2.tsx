'use client';

import { animate } from "animejs";
import { useEffect } from "react";

interface NormalLoaderProps {
    children?: React.ReactNode
}

export default function NormalLoader({ children }: NormalLoaderProps) {

    useEffect(() => {
        animate('.box1-', {
            x: '-100vw',
            duration: 700,
            easing: 'easeInOutQuad',
        })
        animate('.box2-', {
            x: '100vw',
            duration: 700,
            easing: 'easeInOutQuad',
        })
        animate('.box3-', {
            x: '-100vw',
            duration: 700,
            easing: 'easeInOutQuad',
        })
        
    })

    return (
        <>
            <div className="w-full h-screen absolute flex flex-col items-center justify-center overflow-hidden z-50 pointer-events-none">
                <div className='bg-gray-800 w-screen h-[calc(100vh/3)] box1-'/>
                <div className='bg-gray-800 w-screen h-[calc(100vh/3)] box2-'/>
                <div className='bg-gray-800 w-screen h-[calc(100vh/3)] box3-'/>
            </div>
            {children}
        </>
    )
}