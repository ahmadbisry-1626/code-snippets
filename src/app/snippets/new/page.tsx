import { db } from '@/db'
import { redirect } from 'next/navigation'
import React from 'react'
import { IoCodeSlash } from 'react-icons/io5'
import { MdSubtitles } from 'react-icons/md'

const SnippetCreatePage = () => {
    async function createSnippets(formData: FormData) {
        // Need to be a server action
        "use server"

        //User input checks and validation
        const title = formData.get('title') as string
        const code = formData.get('code') as string

        //Insert data to database
        const snippet = await db.snippet.create({
            data: {
                title,
                code
            }
        })

        redirect('/')
    }

    return (
        <div className='flex justify-center items-center min-h-screen container mx-auto px-12 w-full'>
            <form action={createSnippets} className='bg-gray-100 py-10 px-8 md:w-[550px] rounded-[24px] shadow-lg'>
                <div className='flex flex-col gap-10 items-center'>
                    <h3 className='font-bold text-[32px] bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent'>
                        Create a Snippet.
                    </h3>

                    <div className='flex flex-col items-center gap-4 w-full'>
                        <div className='w-full flex border-2 border-violet-600 rounded-full items-center'>
                            <input
                                name='title'
                                placeholder='Defining types in TypeScript'
                                className='px-4 py-3 rounded-full w-full bg-gray-100 focus:outline-none font-medium' required />
                            <MdSubtitles className='text-blue-600 w-7 h-7 mr-4' />
                        </div>
                        <div className='relative w-full flex items-center overflow-hidden'>
                            <textarea
                                name='code'
                                placeholder='const user = {
                                    name: "Hayes",
                                    id: 0,
                                  };'
                                className='px-4 py-3 w-full bg-gray-100 focus:outline-none border-2 border-blue-600 rounded-[12px] h-[150px] font-medium' required />
                            <IoCodeSlash className='text-violet-600 w-6 h-6 mr-4 mb-2 absolute bottom-0 right-0' />
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