import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import { FadeIn } from '../../components/FadeIn';

interface IHeroBannerText {
    title: string;
    description: string
}
export default function HeroBannerText({ description, title }: IHeroBannerText) {
    return (
        <div className='absolute left-0  w-full h-full top-0 flex items-center'>
            <div className='mx-auto container'>
                <FadeIn className=' w-full md:w-1/2 flex flex-col gap-8 text-center md:text-start'>
                    <h1 className='font-semibold tracking-tight text-6xl sm:text-6xl lg:text-7xl'>{title}</h1>
                    <p className='tracking-wide text-gray-600 hidden md:block'>{description}</p>
                    <Link href='/'><span className='font-bold flex gap-2 items-center hover:opacity-80 justify-center md:justify-start'> Learn More <ChevronRightIcon height={18} /></span></Link>
                </FadeIn>
            </div>
        </div>
    )
}
