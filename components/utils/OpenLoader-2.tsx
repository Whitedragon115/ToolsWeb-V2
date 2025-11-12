'use client';

import { animate } from "animejs";
import { useEffect, useRef, useState } from "react";
import DecryptedText from "../DecryptedText";

interface NormalLoaderProps {
    children?: React.ReactNode
}

export default function NormalLoader({ children }: NormalLoaderProps) {

    const loadingRef = useRef(false);
    const [loadDone, setLoadDone] = useState(false);

    useEffect(() => {

        if (loadingRef.current) return;
        setTimeout(() => {
            document.getElementById('closing-div')?.remove();
            setLoadDone(true);
    
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
        }, 1000);

    }, [])

    useEffect(() => {
        const handleLoad = () => {
            console.log('✅ Page fully loaded');
            loadingRef.current = true;
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, [])

    return (
        <>
            <div className="w-full h-screen absolute flex flex-col items-center justify-center overflow-hidden z-50 pointer-events-none">
                <div className='bg-gray-800 w-screen h-[calc(100vh/3)] box1-' />
                <div className='bg-gray-800 w-screen h-[calc(100vh/3)] box2-' />
                <div className='bg-gray-800 w-screen h-[calc(100vh/3)] box3-' />
                <div className='absolute inset-0 flex items-center justify-center animate__animated animate__fadeIn animate__slow'>
                    <DecryptedText
                        text="Loading..."
                        animateOn='view'
                        enableLoop={true}
                        speed={100}
                        maxIterations={20}
                        sequential={true}
                        revealDirection='start'
                        className='text-4xl text-gray-400 emfont-FusionPixelFont10pxMono mt-10'
                        encryptedClassName='text-4xl text-gray-600 emfont-FusionPixelFont10pxMono mt-10'
                        style={{
                            transition: 'all 300ms ease-in-out',
                            opacity: loadDone ? 0 : 1
                        }}
                    />
                </div>
            </div>
            {children}
        </>
    )
}