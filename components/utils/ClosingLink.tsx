'use client';

import { useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";
import { animate, cubicBezier } from "animejs";

interface ClosingLinkProps extends LinkProps {
    children: React.ReactNode,
    className?: string,
    href: string,
    style?: React.CSSProperties,
}

async function speed(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function ClosingLink({ children, href: href, className, style, ...props }: ClosingLinkProps) {
    const router = useRouter();

    const animateConfig = {
        ease: cubicBezier(0.908, 0.161, 0.569, 0.989),
        duration: 500,
        autoplay: false,
    }

    async function handelClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault();

        // 創建容器
        const container = document.createElement('div');
        container.className = 'w-full h-screen absolute top-0 left-0 flex flex-col overflow-hidden z-50 pointer-events-none';
        container.id = 'closing-div';
        
        // 創建三個方塊
        const box1 = document.createElement('div');
        box1.className = 'bg-gray-800 w-screen h-[calc(100vh/3)] box1';
        box1.style.transform = 'translateX(100vw)';
        
        const box2 = document.createElement('div');
        box2.className = 'bg-gray-800 w-screen h-[calc(100vh/3)] box2';
        box2.style.transform = 'translateX(-100vw)';
        
        const box3 = document.createElement('div');
        box3.className = 'bg-gray-800 w-screen h-[calc(100vh/3)] box3';
        box3.style.transform = 'translateX(100vw)';
        
        // 添加到容器
        container.appendChild(box1);
        container.appendChild(box2);
        container.appendChild(box3);
        
        // 添加到 body
        document.body.appendChild(container);

        // 播放動畫
        animate('.box1', {
            ...animateConfig,
            translateX: '0vw',
        }).play();

        animate('.box2', {
            ...animateConfig,
            translateX: '0',
        }).play();

        animate('.box3', {
            ...animateConfig,
            translateX: '0',
        }).play();

        await speed(700);
        router.push(href);
        await speed(300);
    }

    return (
        <Link 
            className={`${className} block h-full w-full`} 
            href={href} 
            style={style}
            {...props} 
            onClick={handelClick}
        >
            {children}
        </Link>
    )
}