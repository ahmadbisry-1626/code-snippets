import { db } from '@/db'
import React from 'react'
import SnippetNotFound from '../not-found'
import SnippetEditForm from '@/components/SnippetEditForm'

interface SnippetEditProps {
    params: {
        id: string
    }
}

const SnippetEditPage = async (props: SnippetEditProps) => {
    const id = parseInt(props.params.id)
    const snippet = await db.snippet.findFirst({
        where: { id }
    })

    if (!snippet) {
        return <SnippetNotFound />
    }

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='wrapper flex items-center'>
                <SnippetEditForm snippet={snippet} />
            </div>
        </div>
    )
}

export default SnippetEditPage