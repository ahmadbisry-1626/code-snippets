import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const SnippetLoadingPage = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <AiOutlineLoading3Quarters className='w-8 h-8 animate-spin'/>
    </div>
  )
}

export default SnippetLoadingPage