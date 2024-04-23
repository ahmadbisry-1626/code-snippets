import { db } from "@/db";
import Image from "next/image";
import Link from "next/link";
import { IoCodeSlash } from "react-icons/io5";

export default async function Home() {
  const snippets = await db.snippet.findMany()

  return (
    <div className="container max-w-7xl p-6 mx-auto min-h-screen flex flex-col justify-center items-center gap-10">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-[32px] font-bold">List of Snippets</h1>
        <Link href="/snippets/new" className="p-4 px-6 text-gray-50 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full">
          Create New Snippet
          </Link>
      </div>

      <div className="w-full rounded-[12px] flex flex-col gap-4">
        {snippets.map((code) => (
          <div className="flex flex-col border-b-2 border-gray-300 pb-4" key={code.id}>
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[20px] text-gray-700">
                  {code.title}
                </h3>

              <div className="bg-gray-700 p-4 pt-12 rounded-[12px] flex-1 max-w-[800px] h-[150px] relative">
                <div className="flex items-center gap-2 absolute top-0 left-0 translate-y-3 translate-x-4">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"/>
                  <div className="w-4 h-4 bg-violet-600 rounded-full"/>
                  <div className="w-4 h-4 bg-violet-700 rounded-full"/>
                </div>
                <IoCodeSlash className="absolute top-0 right-0 w-6 h-6 text-violet-600 translate-y-3 -translate-x-4"/>

                <span className="text-gray-400">
                  {code.code}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
