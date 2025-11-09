'use client';

import { useEffect } from 'react';
import { animate, cubicBezier } from 'animejs';

interface GlobalLoaderProps {
    children: React.ReactNode;
}

export default function GlobalLoader({ children }: GlobalLoaderProps) {

    const animConfig = {
        autoplay: false,
    };

    useEffect(() => {

        const handleLoad = async () => {
            animate('.an_unloadL', {
                ...animConfig,
                keyframes: [
                    { translateY: '-80%', duration: 500, ease: 'inExpo' },
                    { translateY: '-65%', duration: 500, ease: 'outExpo' },
                    { translateY: '-101%', duration: 200, ease: 'inExpo' },
                ],
            }).play()
            animate('.an_unloadR', {
                ...animConfig,
                keyframes: [
                    { translateY: '85%', duration: 500, ease: 'inExpo' },
                    { translateY: '65%', duration: 200, ease: 'outExpo' },
                    { translateY: '101%', duration: 500, ease: 'inExpo' },
                ],
            }).play()
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }

    }, []);

    return (
        <>
            <div className="w-full h-screen absolute flex items-center justify-center overflow-hidden pointer-events-none">
                <div className='absolute top-0 left-0 z-50 bg-gray-800 w-screen h-[51vh] an_unloadL'></div>
                <div className='absolute bottom-0 left-0 z-50 bg-gray-800 w-screen h-[51vh] an_unloadR'></div>
            </div>
            {children}
        </>
    );
}
