"use client"

import { createSnippets } from '@/actions'
import Link from 'next/link'
import React from 'react'
import { useFormState } from 'react-dom'
import { IoCodeSlash } from 'react-icons/io5'
import { MdSubtitles } from 'react-icons/md'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { TiWarningOutline } from 'react-icons/ti'

const SnippetCreatePage = () => {

    const [formState, action] = useFormState(createSnippets, { message: '' })

    return (
        <div className='flex flex-col gap-10 justify-center items-center min-h-screen container mx-auto px-12 w-full'>
            <form action={action} className='bg-gray-100 py-10 px-8 md:w-[550px] rounded-[24px] shadow-lg'>
                <div className='flex flex-col gap-10 items-center'>
                    <h3 className='font-bold text-[32px] bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent'>
                        Create a Snippet.
                    </h3>

                    <div className='flex flex-col items-center gap-4 w-full'>
                        <div className='w-full flex border-2 border-violet-600 rounded-full items-center'>
                            <input
                                name='title'
                                placeholder='Defining types in TypeScript'
                                className='px-4 py-3 rounded-full w-full bg-gray-100 focus:outline-none font-medium' />
                            <MdSubtitles className='text-blue-600 w-7 h-7 mr-4' />
                        </div>
                        <div className='relative w-full flex items-center overflow-hidden'>
                            <textarea
                                name='code'
                                placeholder='const user = {
                                    name: "Hayes",
                                    id: 0,
                                  };'
                                className='px-4 py-8 w-full bg-gray-700 text-gray-400 focus:outline-none rounded-[12px] h-[150px] font-medium' />
                            <IoCodeSlash className='text-violet-600 w-6 h-6 mr-4 mb-2 absolute bottom-0 right-0' />
                            <div className="flex items-center gap-2 absolute top-0 left-0 translate-y-3 translate-x-4">
                                <div className="w-3 h-3 bg-blue-600 rounded-full" />
                                <div className="w-3 h-3 bg-violet-600 rounded-full" />
                                <div className="w-3 h-3 bg-violet-700 rounded-full" />
                            </div>
                        </div>

                        <div className={`bg-red-500 w-full justify-center rounded-[12px] font-medium flex items-center text-gray-50 ${formState.message ? 'translate-y-0 opacity-100 mt-0' : 'translate-y-10 opacity-0 -mt-10'} transition-all duration-500`}>
                            <span className="p-4">{formState.message}</span>
                            <TiWarningOutline className='w-7 h-7' />
                        </div>

                        <button type='submit' className='bg-gradient-to-r from-blue-600 to-violet-600 w-full p-4 rounded-full text-white z-10'>
                            Create
                        </button>
                    </div>
                </div>
            </form>

            <Link href="/" className='flex items-center justify-center gap-4 p-4 rounded-full px-12 transtion duration-200 relative group'>
                <span className='text-[20px] font-medium bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent group-hover:-translate-x-6 transition-all duration-500 z-10'>Go back</span>
                <RiArrowGoBackLine className='w-6 h-6 text-violet-600 absolute translate-x-4 group-hover:translate-x-10 opacity-0 group-hover:opacity-100 transition-all duration-500' />
            </Link>
        </div>
    )
}

export default SnippetCreatePage