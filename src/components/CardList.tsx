import React from 'react'
import { IoCodeSlash } from 'react-icons/io5';

type CardProps = {
    id: number;
    title: string;
    code: string;
}

const CardList = ({ code }: {code: CardProps}) => {
    return (
        <div className="flex flex-col border-b-2 border-gray-300 pb-4">
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[20px] text-gray-700">
                    {code.title}
                </h3>

                <div className="bg-gray-700 p-4 pt-12 rounded-[12px] flex-1 max-w-[800px] h-[150px] relative">
                    <div className="flex items-center gap-2 absolute top-0 left-0 translate-y-3 translate-x-4">
                        <div className="w-4 h-4 bg-blue-600 rounded-full" />
                        <div className="w-4 h-4 bg-violet-600 rounded-full" />
                        <div className="w-4 h-4 bg-violet-700 rounded-full" />
                    </div>
                    <IoCodeSlash className="absolute top-0 right-0 w-6 h-6 text-violet-600 translate-y-3 -translate-x-4" />

                    <span className="text-gray-400">
                        {code.code}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CardList