'use server'

import { db } from "@/db"
import { redirect } from "next/navigation"

export async function editSnippet(id: number, title: string, code: string) {
    await db.snippet.update({
        where: { id },
        data: { title, code }
    })

    redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id: number) {
    await db.snippet.delete({
        where: { id }
    })

    redirect('/')
}

export async function createSnippets(formState: { message: string }, formData: FormData) {

    //User input checks and validation
    const title = formData.get('title')
    const code = formData.get('code')

    if (typeof title !== 'string' || title.length < 5) {
        return {
            message: 'Title must be at least 5 characters long'
        }
    }

    if (typeof code !== 'string' || code.length < 10) {
        return {
            message: 'Code must be at least 10 characters long'
        }
    }

    //Insert data to database
    const snippet = await db.snippet.create({
        data: {
            title,
            code
        }
    })

    redirect('/')
}