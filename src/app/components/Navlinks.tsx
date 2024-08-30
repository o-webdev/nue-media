'use client'

import { categories } from "../../../constants"
import { usePathname } from "next/navigation"
import NavLink from "./NavLink"

const Navlinks = () => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname?.split("/").pop() === path;
    }

    return (
        <nav className="hidden md:grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm 
        gap-4 pb-10 max-w-6xl mx-auto border-b border-black/50 dark:border-zinc-100">
            {categories.map((category) => (
                <NavLink
                    key={category}
                    category={category}
                    isActive={isActive(category)}
                />

            ))}

        </nav>
    )
}

export default Navlinks