'use client'

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function SearchBox() {
    const [input, setInput] = useState('');
    const router = useRouter();

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input) return;

        router.push(`/search?term=${input}`)
    };

    return (
        <form
            onSubmit={handleSearch}
            className='max-w-6xl mx-auto flex justify-between items-center px-5'>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search stories..."
                className='placeholder:text-black/50 dark:placeholder:text-zinc-100 w-full h-14 rounded-sm 
                  outline-none flex-1 bg-transparent
                '
            />

            <button
                type="submit"
                disabled={!input}
                className=""
            >
                Search
            </button>
        </form>
    )
}

export default SearchBox