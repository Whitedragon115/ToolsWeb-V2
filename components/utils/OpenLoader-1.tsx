'use client';

import { useEffect, useState, useRef } from 'react';
import { animate, cubicBezier } from 'animejs';
import { FaGithub } from "react-icons/fa";

import ShinyText from '@/components/ShinyText'

//@ts-ignore
import 'animate.css'
//@ts-ignore
import './utils.css';
import DecryptedText from '@/components/DecryptedText';

interface GlobalLoaderProps {
    children: React.ReactNode;
}

export default function GlobalLoader({ children }: GlobalLoaderProps) {

    const [loadDone, setLoadDone] = useState(false);
    const loadingRef = useRef(false);

    useEffect(() => {

        const durationPerPhase = 1000;

        // Settings

        const baseConfig = {
            autoplay: true,
            ease: cubicBezier(0.7, 0.1, 0.5, 0.9)
        };

        const rotationAnimations = [
            {
                selector: '.line-1',
                keyframes: [
                    { duration: 500, rotate: '+=45deg' },
                    { duration: durationPerPhase, rotate: '+=0deg' },
                    { duration: 500, rotate: '+=45deg' },
                    { duration: durationPerPhase, rotate: '+=0deg' },
                ]
            },
            {
                selector: '.line-2',
                keyframes: [
                    { duration: 500, rotate: '-=45deg' },
                    { duration: durationPerPhase, rotate: '-=0deg' },
                    { duration: 500, rotate: '-=45deg' },
                    { duration: durationPerPhase, rotate: '-=0deg' },
                ]
            }
        ];

        const boxAnimations = [
            {
                selector: '.lb-1',
                keyframes: [
                    { duration: 500, translateX: '0', translateY: '256px' },
                    { duration: durationPerPhase, translateX: '0', translateY: '256px' },
                    { duration: 500, translateX: '256px', translateY: '256px' },
                    { duration: durationPerPhase, translateX: '256px', translateY: '256px' },
                ]
            },
            {
                selector: '.lb-2',
                keyframes: [
                    { duration: 500, translateX: '-256px', translateY: '0' },
                    { duration: durationPerPhase, translateX: '-256px', translateY: '0' },
                    { duration: 500, translateX: '-256px', translateY: '256px' },
                    { duration: durationPerPhase, translateX: '-256px', translateY: '256px' },
                ]
            },
            {
                selector: '.lb-3',
                keyframes: [
                    { duration: 500, translateX: '256px', translateY: '0' },
                    { duration: durationPerPhase, translateX: '256px', translateY: '0' },
                    { duration: 500, translateX: '256px', translateY: '-256px' },
                    { duration: durationPerPhase, translateX: '256px', translateY: '-256px' },
                ]
            },
            {
                selector: '.lb-4',
                keyframes: [
                    { duration: 500, translateX: '0', translateY: '-256px' },
                    { duration: durationPerPhase, translateX: '0', translateY: '-256px' },
                    { duration: 500, translateX: '-256px', translateY: '-256px' },
                    { duration: durationPerPhase, translateX: '-256px', translateY: '-256px' },
                ]
            }
        ];


        // Opening Animations
        const openingAnimations = () => {

            const targetW = window.innerWidth - 100;
            const targetH = window.innerHeight - 100;

            animate('.loader-xray', {
                ease: cubicBezier(0.7, 0.1, 0.5, 0.9),
                keyframes: [
                    { duration: 300, '--hole-w': `${targetW / 2}px`, '--hole-h': `${targetH / 2}px` },
                    { duration: 300 },
                    { duration: 300, '--hole-w': `${targetW / 2 + 200}px`, '--hole-h': `${targetH / 2 + 200}px` },
                    { duration: 0, 'opacity': 0 }
                ]
            })

            animate('.loader-xray-box', {
                ease: cubicBezier(0.7, 0.1, 0.5, 0.9),
                keyframes: [
                    { duration: 300, '--hole-w': `${targetW}px`, '--hole-h': `${targetH}px` },
                    { duration: 300 },
                    { duration: 300, '--hole-w': `${targetW + 200}px`, '--hole-h': `${targetH + 200}px` },
                    { duration: 0, display: 'none' }
                ]
            })
        }

        // Rotation lines

        const l2 = animate('.line-2', { ...baseConfig, keyframes: rotationAnimations[1].keyframes }).play();
        const box1 = animate('.lb-1', { ...baseConfig, keyframes: boxAnimations[0].keyframes }).play();
        const box2 = animate('.lb-2', { ...baseConfig, keyframes: boxAnimations[1].keyframes }).play();
        const box3 = animate('.lb-3', { ...baseConfig, keyframes: boxAnimations[2].keyframes }).play();
        const box4 = animate('.lb-4', { ...baseConfig, keyframes: boxAnimations[3].keyframes }).play();

        l2.onComplete = () => { l2.restart(); };
        box1.onComplete = () => { box1.restart(); }
        box2.onComplete = () => { box2.restart(); }
        box3.onComplete = () => { box3.restart(); }
        box4.onComplete = () => { box4.restart(); }

        const l1 = animate('.line-1', {
            ...baseConfig,
            keyframes: rotationAnimations[0].keyframes,
            onComplete: () => {
                if (loadingRef.current) {
                    setLoadDone(true);
                    l1.cancel();
                    l2.cancel();
                    box1.cancel();
                    box2.cancel();
                    box3.cancel();
                    box4.cancel();
                    l1.reset();
                    openingAnimations();
                } else {
                    l1.restart();
                }
            }
        }).play();

        setTimeout(() => {
            loadingRef.current = true;
        }, 100);

    }, [])

    return (
        <>
            <div className="w-full h-screen absolute flex items-center justify-center overflow-hidden z-50 pointer-events-none">
                <div className='absolute left-0 top-0 bg-gray-800 w-screen h-screen flex justify-center items-center loader-xray'
                >
                </div>
                <div
                    className='absolute left-0 top-0 w-screen h-screen loader-1 flex justify-center items-center transition-all duration-300'
                    style={{
                        backgroundColor: loadDone ? '#1e293900' : '#1e2939FF'
                    }}
                >
                    <div className='absolute border border-gray-500 line-1 loader-xray-box animate__animated animate__fadeIn'>
                        <div
                            className='absolute w-10 h-10 top-0 left-0 bg-gray-700 border border-gray-500 lb-1'
                            style={{ translate: '-21px -21px' }}
                        />
                        <div
                            className='absolute w-10 h-10 top-0 right-0 bg-gray-700 border border-gray-500 lb-2'
                            style={{ translate: '21px -21px' }}
                        />
                        <div
                            className='absolute w-10 h-10 bottom-0 left-0 bg-gray-700 border border-gray-500 lb-3'
                            style={{ translate: '-21px 21px' }}
                        />
                        <div
                            className='absolute w-10 h-10 bottom-0 right-0 bg-gray-700 border border-gray-500 lb-4'
                            style={{ translate: '21px 21px' }}
                        />
                    </div>
                    <div
                        className='absolute w-64 h-64 rotate-45 border border-gray-500 line-2 animate__animated animate__fadeIn'
                        style={{
                            transition: loadDone ? 'all 300ms ease-in-out' : '',
                            transform: loadDone ? 'scale(6)' : '',
                            borderWidth: loadDone ? 0 : 1,
                        }}
                    />
                    <div className='animate__animated animate__fadeIn'>
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
                <div
                    className='absolute bottom-[50px] w-[200] h-[50] flex gap-3 items-center justify-center loader-1 transition-all duration-300 ease-in-out animate__animated animate__fadeIn'
                    style={{
                        display: loadDone ? 'none' : 'flex'
                    }}
                >
                    <a href='https://github.com'>
                        <ShinyText text='Build by Dragon' className='emfont-FusionPixelFont10pxMono text-gray-400 underline underline-offset-2' />
                    </a>
                    <FaGithub className='text-[20px] text-gray-300' />
                </div>
            </div>

            {children}
        </>
    );
}
