"use client"

import { Snippet } from '@prisma/client';
import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa';
import { TiWarningOutline } from 'react-icons/ti';

const DeleteModal = ({ snippet, deleteSnippetAction }: { snippet: Snippet, deleteSnippetAction: () => Promise<void> }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className='py-2 px-6 border-2 border-blue-600 bg-transparent rounded-full text-violet-600 hover:bg-blue-600 hover:text-gray-50'>
                Delete
            </button>

            {showModal && (
                <div className='min-h-screen absolute bg-gray-700 opacity-60 z-10 top-0 w-full left-0' />
            )}

            <div className={`min-h-screen absolute top-0 w-full left-0 flex justify-center items-center ${showModal ? 'opacity-100 z-20' : 'opacity-0 -z-10'}`}>
                <div className={`p-6 bg-gray-50 rounded-[12px] gap-4 flex flex-col items-center transition-all duration-700 ${showModal ? 'scale-100' : 'scale-75'}`}>
                    <TiWarningOutline className='w-14 h-14 text-violet-600' />
                    <h1 className='font-medium text-[24px]'>Delete Snippet</h1>
                    <p className='text-gray-500 text-[18px] pb-10 max-w-sm text-center leading-relaxed'>
                        You're going to delete "{snippet.title}". Are you sure?
                    </p>

                    <div className='flex gap-4 items-center w-full border-t-2 pt-6 border-gray-300'>
                        <button
                            onClick={() => setShowModal(false)}
                            className='p-4 bg-gray-200 rounded-full w-full font-medium hover:bg-gray-300 transition duration-200'>
                            Cancel
                        </button>
                        <form action={deleteSnippetAction} className='w-full'>
                            <button className='p-4 rounded-full w-full bg-violet-600 text-gray-50 relative flex items-center justify-center group'>
                                <span className='group-hover:-translate-x-4 transition duration-200 font-medium z-10'>Delete</span>
                                <FaTrash className='h-4 w-4 absolute translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-8 transition-all duration-200 z-10' />

                                <div className='absolute w-full h-full bg-red-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse' />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteModal