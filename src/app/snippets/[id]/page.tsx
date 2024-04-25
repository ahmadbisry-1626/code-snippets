import { deleteSnippet } from '@/actions'
import DeleteModal from '@/components/DeleteModal'
import { db } from '@/db'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import { IoCodeSlash } from 'react-icons/io5'
import { RiArrowGoBackLine } from 'react-icons/ri'

interface SnippetShowPageProps {
    params: {
        id: string
    }
}

const ShowSnippets = async (props: SnippetShowPageProps) => {
    await new Promise((r) => setTimeout(r, 2000))

    const snippet = await db.snippet.findFirst({
        where: { id: parseInt(props.params.id) }
    })

    if (!snippet) {
        return notFound()
    }

    const deleteSnippetAction = deleteSnippet.bind(null, snippet.id)

    return (
        <div className='flex flex-col gap-10 min-h-screen justify-center items-center relative'>
            <div className="wrapper flex flex-col gap-4 w-full items-center">
                <div className='flex items-center justify-between w-full max-w-3xl gap-4 py-2'>
                    <h3 className="font-semibold text-[24px] text-gray-700 max-sm:max-w-[200px]">
                        {snippet.title}
                    </h3>

                    <div className='flex gap-2'>
                        <Link href={`/snippets/${snippet.id}/edit`} className='py-2 px-6 border-2 border-violet-600 bg-transparent rounded-full text-blue-600 hover:bg-violet-600 transition duration-200 hover:text-gray-50'>
                            Edit
                        </Link>
                        <DeleteModal snippet={snippet} deleteSnippetAction={deleteSnippetAction}/>
                    </div>
                </div>

                <div className="bg-gray-700 p-4 pt-12 pb-6 rounded-[12px] w-full max-w-3xl relative">
                    <div className="flex items-center gap-2 absolute top-0 left-0 translate-y-3 translate-x-4">
                        <div className="w-4 h-4 bg-blue-600 rounded-full" />
                        <div className="w-4 h-4 bg-violet-600 rounded-full" />
                        <div className="w-4 h-4 bg-violet-700 rounded-full" />
                    </div>
                    <IoCodeSlash className="absolute top-0 right-0 w-6 h-6 text-violet-600 translate-y-3 -translate-x-4" />

                    <pre className="text-gray-400">
                        {snippet.code}
                    </pre>
                </div>
            </div>

            <Link href="/" className='flex items-center justify-center gap-4 p-4 rounded-full px-12 transtion duration-200 relative group'>
                <span className='text-[20px] font-medium bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent group-hover:-translate-x-6 transition-all duration-500'>Go back</span>
                <RiArrowGoBackLine className='w-6 h-6 text-violet-600 absolute translate-x-4 group-hover:translate-x-10 opacity-0 group-hover:opacity-100 transition-all duration-500'/>
            </Link>
        </div>
    )
}

export default ShowSnippets