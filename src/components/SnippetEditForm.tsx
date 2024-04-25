"use client"

import { editSnippet } from '@/actions'
import { Editor } from '@monaco-editor/react'
import { Snippet } from '@prisma/client'
import React, { useState } from 'react'

const SnippetEditForm = ({ snippet }: { snippet: Snippet }) => {
    const [code, setCode] = useState(snippet.code);
    const [title, setTitle] = useState(snippet.title);

    const handleEditorChange = (value: string = "") => {
        setCode(value)
    }

    const editSnippetAction = editSnippet.bind(null, snippet.id, title, code)

    return (
        <div className='flex flex-col items-center w-full gap-4'>
            <h1 className='text-[32px] font-medium'>You're on editing the {" "}
                <input
                    className='text-violet-600 max-w-[300px] focus:outline-none'
                    defaultValue={snippet.title}
                    onChange={(e) => setTitle(e.target.value)} />
            </h1>
            <div className='w-full max-w-3xl'>
                <Editor
                    height="40vh"
                    theme='vs-dark'
                    defaultLanguage="typescript"
                    defaultValue={snippet.code}
                    options={{ minimap: { enabled: false } }}
                    onChange={handleEditorChange}
                />
                <form action={editSnippetAction}>
                    <button
                        type='submit'
                        className='bg-gradient-to-r from-blue-600 to-violet-600 p-4 rounded-full text-white w-full mt-4'>
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SnippetEditForm