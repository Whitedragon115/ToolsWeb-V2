import Image from 'next/image';
import { FaHeart, FaStar } from 'react-icons/fa';

interface ToolsBlockProps {
    tools: Array<{
        name: string;
        category: string;
        description: string;
        icon: string;
    }>;
}

export default function ToolsBlock({ tools }: ToolsBlockProps) {



    return (
        <>
            {tools.map((tool, index) => (
                <div 
                key={index}
                className='bg-gray-800/50 h-fit rounded-lg p-4 border cursor-pointer hover:scale-[1.01] transition-all duration-200'
                >
                    <div className='flex gap-4 items-start w-full h-[150px]'>
                        <Image unoptimized src={tool.icon} alt={tool.name} width={150} height={150} className='aspect-square rounded-2xl' />
                        <div className='flex flex-col mb-0 h-full pt-2 gap-1'>
                            <span className='text-white font-semibold text-lg'>{tool.name}</span>
                            <p className='text-gray-400 h-auto text-sm overflow-y-auto'>{tool.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}