import Image from 'next/image'
import React from 'react'
import { IoCodeSlash } from 'react-icons/io5'
import { MdSubtitles } from 'react-icons/md'

const SnippetCreatePage = () => {
    return (
        <div className='flex justify-center items-center min-h-screen container mx-auto px-12 w-full'>
            <form className='bg-gray-100 py-10 px-8 md:w-[500px] rounded-[24px] shadow-[inset_2px_4px_8px_2px_#00000024]'>
                <div className='flex flex-col gap-10 items-center'>
                    <h3 className='font-bold text-[32px] bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent '>
                        Create a Snippet.
                    </h3>

                    <div className='flex flex-col items-center gap-4 w-full'>
                        <div className='w-full flex border-2 border-gray-300 rounded-full items-center'>
                            <input
                                name='title'
                                placeholder='Title'
                                className='px-4 py-3 rounded-full w-full bg-gray-100 focus:outline-none text-gray-400' />
                            <MdSubtitles className='text-gray-400 w-7 h-7 mr-4' />
                        </div>
                        <div className='relative w-full flex items-center overflow-hidden'>
                            <textarea
                                name='code'
                                placeholder='Code'
                                className='px-4 py-3 w-full bg-gray-100 focus:outline-none text-gray-400 border-2 border-gray-300 rounded-[12px] h-[150px]' />
                            <IoCodeSlash className='text-gray-400 w-6 h-6 mr-4 mb-2 absolute bottom-0 right-0' />
                        </div>

                        <button type='submit' className='bg-gradient-to-r from-blue-600 to-violet-600 w-full p-4 rounded-full text-white'>
                            Create
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SnippetCreatePage