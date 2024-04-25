import CardList from "@/components/CardList";
import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany()

  return (
    <div className="container max-w-7xl p-6 mx-auto min-h-screen flex flex-col justify-center items-center gap-10">
      <div className="flex items-center justify-between w-full gap-4">
        <h1 className="md:text-[32px] text-[24px] font-bold">List of Snippets</h1>
        <Link href="/snippets/new" className="p-4 px-6 text-gray-50 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full">
          Create New Snippet
        </Link>
      </div>

      <div className="w-full rounded-[12px] flex flex-col gap-4">
        {snippets.map((code) => (
          <CardList code={code} key={code.id} />
        ))}
      </div>
    </div>
  );
}
