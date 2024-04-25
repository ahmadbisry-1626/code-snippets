import { CardProps } from '@/types';
import Link from 'next/link';
import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoCodeSlash } from 'react-icons/io5';

const CardList = ({ code }: { code: CardProps }) => {
    return (
        <div className="flex flex-col border-b-2 border-gray-300 pb-4">
            <div className="flex max-md:flex-col items-center justify-between gap-6">
                <div className='w-[380px] flex flex-col items-end gap-2'>
                    <h3 className="font-semibold text-[20px] text-gray-700 text-end">
                        {code.title}
                    </h3>
                    <Link href={`/snippets/${code.id}`} className='text-gray-400 font-semibold flex items-center gap-1 hover:text-gray-700 transition duration-200'>
                        <span>Details</span>
                        <IoMdArrowRoundForward  className='w-4 h-4'/>

                    </Link>
                </div>

                <div className="bg-gray-700 p-4 pt-12 pb-6 rounded-[12px] flex-1 max-w-[800px] relative">
                    <div className="flex items-center gap-2 absolute top-0 left-0 translate-y-3 translate-x-4">
                        <div className="w-4 h-4 bg-blue-600 rounded-full" />
                        <div className="w-4 h-4 bg-violet-600 rounded-full" />
                        <div className="w-4 h-4 bg-violet-700 rounded-full" />
                    </div>
                    <IoCodeSlash className="absolute top-0 right-0 w-6 h-6 text-violet-600 translate-y-3 -translate-x-4" />

                    <pre className="text-gray-400">
                        {code.code}
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default CardList