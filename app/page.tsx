'use client';

import TextType from '@/components/TextType';
import LetterGlitch from '@/components/LetterGlitch';
import { FaGithub, FaTools } from "react-icons/fa";

import GlobalLoader from '@/components/utils/OpenLoader-1';
import ClosingLink from '../components/utils/ClosingLink';
import ShinyText from '@/components/ShinyText';
import { useEffect, useState, useRef } from 'react';

export default function Home() {

  const moveDistance = 20;

  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const { innerWidth, innerHeight } = window
      setPosition({ x: -(e.clientX / (innerWidth / moveDistance) - (moveDistance / 2)), y: -(e.clientY / (innerHeight / moveDistance) - (moveDistance / 2)) });
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <GlobalLoader>
      <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div
          className='absolute inset-0 z-0 scale-105'
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        >
          <LetterGlitch
            glitchColors={["#1a2a6c", "#4a5fc1", "#7b8cde", "#a0aeff"]}
            outerVignette={false}
            centerVignette={true}
            characters='-----------------------------+01'
          />
        </div>
        <div
          className='w-[50vw] h-[10vh] fixed -top-1 p-3 backdrop-blur-sm bg-white/10'
          style={{
            borderRadius: '0 0 50px 50px',
            boxShadow: 'rgba(255, 255, 255, 0.2) 0 0 50px',
          }}
        >
          <div className='w-full h-full p-2 rounded-full flex flex-row items-center justify-between backdrop-blur-sm'>
            <div className='ml-5 text-gray-300 text-3xl emfont-FusionPixelFont10pxMono'>
              <span className=''>Dragon Tools</span>
              <ShinyText
                text="V 0.0.1"
                className='ml-2 text-sm text-gray-400'
              />
            </div>
            <div className='h-full mr-[0.4] aspect-square bg-gray-500 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105'>
              <ClosingLink
                href="/tools"
                className="rounded-full cursor-pointer group flex items-center justify-center transition-all duration-300 ease-in-out hover:ring-2 hover:ring-white/40 active:scale-95 hover:scale-110"
              >
                <FaTools className='text-white text-3xl' />
              </ClosingLink>
            </div>
          </div>
        </div>

        <div className='text-center relative z-10'
          style={{
            transform: `translate(${-(position.x / 2)}px, 0px)`,
          }}
        >
          {/* @ts-ignore */}
          <TextType
            className='text-7xl emfont-FusionPixelFont10pxMono text-gray-200'
            text={["Dragon tools", "Made by Dragon"]}
            pauseDuration={3000}
            showCursor={true}
            deletingSpeed={50}
            variableSpeed={{ min: 100, max: 200 }}
            cursorCharacter="_"
          />
        </div>

        { /* Theme svg panel */}
        <div className="bottom-0 right-0 fixed transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-x-1.5 hover:-translate-y-1.5">
          <div className='absolute bottom-2 w-full h-auto flex justify-center items-center gap-2 translate-x-2.5'>
            <a href='https://github.com'>
              <ShinyText
                text="By Dragon"
                className='emfont-FusionPixelFont10pxMono text-[20px] underline underline-offset-2'
              />
            </a>
          </div>
          <FaGithub className='absolute text-5xl text-gray-400 bottom-11 right-5' />
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M140 140H0L50.5 50.5L140 0V140Z" fill='#212430' fillOpacity={0.8} />
          </svg>
        </div>

      </div>
    </GlobalLoader>
  );
}