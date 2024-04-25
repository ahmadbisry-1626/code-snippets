import React from 'react'

const SnippetNotFound = () => {
  return (
    <div className='min-h-screen flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-4xl font-bold text-gray-700'>404 - Page Not Found</h1>
        <p className='text-gray-400 text-[18px]'>Sorry, but we couldn't find that particular snippet</p>
    </div>
  )
}

export default SnippetNotFound