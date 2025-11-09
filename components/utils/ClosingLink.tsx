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

        animate('.an_unloadL', {
            ...animateConfig,
            y: '0%',
        }).play()

        animate('.an_unloadR', {
            ...animateConfig,
            y: '0%',
        }).play()

        await speed(700);
        router.push(href);
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