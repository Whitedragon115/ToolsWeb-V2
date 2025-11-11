'use client';

import TextType from '@/components/TextType';
import Aurora from '@/components/Aurora';
import { FaTools } from "react-icons/fa";

//@ts-ignore
import 'animate.css'
import GlobalLoader from '@/components/utils/OpenLoader-1';
import ClosingLink from '../components/utils/ClosingLink';

export default function Home() {

  return (
    <GlobalLoader>
      <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={["#13b494", "#2557f8", "#5f00db"]}
            blend={5}
            amplitude={1}
            speed={0.5}
          />
        </div>
        <div className='absolute inset-0 backdrop-blur-sm z-0 animate__animated animate__fadeIn animate__delay-500' />

        <div
          className='bg-gray-900 w-[50vw] h-[10vh] fixed top-0 p-3 animate__animated animate__fadeInDown animate__delay-1s'
          style={{
            borderRadius: '0 0 50px 50px',
            boxShadow: 'rgba(10, 10, 10, 0.7) 0 0 20px',
          }}
        >
          <div className='bg-gray-800 w-full h-full p-2 rounded-full flex flex-row items-center justify-between'>
            <div className='ml-5 text-blue-200 text-3xl emfont-FusionPixelFont10pxMono'>
              <span className=''>Dragon Tools</span>
              <span className='ml-2 text-sm text-gray-400'>v2.0.1</span>
            </div>
            <div className='h-full aspect-square bg-gray-500 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105'>
              <ClosingLink
                href="/tools"
                className="rounded-full cursor-pointer group flex items-center justify-center transition-all duration-300 ease-in-out hover:ring-2 hover:ring-white/40 active:scale-95 hover:scale-110"
              >
                <FaTools className='text-white text-3xl' />
              </ClosingLink>
            </div>
          </div>
        </div>

        <div className='text-center relative z-10 animate__animated animate__fadeIn animate__slow animate__delay-500'>
          {/* @ts-ignore */}
          <TextType
            className='text-7xl emfont-FusionPixelFont10pxMono text-blue-100'
            text={["Dragon tools", "Made by Dragon"]}
            pauseDuration={3000}
            showCursor={true}
            deletingSpeed={75}
            variableSpeed={{ min: 100, max: 200 }}
            cursorCharacter="_"
          />
        </div>

        { /* Theme svg panel */}
        <div className="bottom-0 right-0 fixed animate__animated animate__fadeInBottomRight animate__delay-1s">
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M140 140H0L50.5 50.5L140 0V140Z" fill='#212430' fillOpacity={0.8} />
          </svg>
        </div>

      </div>
    </GlobalLoader>
  );
}