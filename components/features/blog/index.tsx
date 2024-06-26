import React from 'react'
import { IBlog } from '../../../types/blog'
import Image from 'next/image'
import { getDDMMYYYFormateDate } from '../../../utils/getDate'
import { CalendarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Blog(props: Omit<IBlog, 'description'>) {
    const { imageUrl, title, date, uniqueId } = props
    return (
        <Link href={`/blogs/${uniqueId}`} className='relative block h-full overflow-hidden cursor-pointer  rounded-md'>
            <div className='flex flex-col bg-gray-100'>
                <div className='overflow-hidden'>
                <Image src={imageUrl} alt={title} width={300} height={300} className='h-full w-full object-cover transition-all hover:scale-105 duration-200 ease-in-out' />
                </div>
                <div className='px-4 py-3 flex-1'>
                    <div className='flex flex-col justify-end h-full'>
                        <h2 className='font-semibold text-lg'>{title}</h2>
                        {date && <p className='flex items-center gap-2 text-sm'><CalendarIcon height={18} className='text-brandSecondary' /> {getDDMMYYYFormateDate(date)}</p>}  </div>
                </div>
            </div>
        </Link>
    )
}
