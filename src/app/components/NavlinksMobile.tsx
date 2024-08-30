'use client'

import { categories } from "../../../constants"
import { usePathname } from "next/navigation"
import NavLink from "./NavLink"

interface NavlinksMobileProps {
    closeNav: () => void;
}

const NavlinksMobile: React.FC<NavlinksMobileProps> = ({ closeNav }) => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname?.split("/").pop() === path;
    }

    return (
        <nav className="mt-20 grid grid-cols-1 text-xs md:text-sm 
        gap-4 pb-10  border-b border-black/50 dark:border-zinc-100">
            {categories.map((category) => (
                <NavLink
                    key={category}
                    category={category}
                    isActive={isActive(category)}
                    onClick={closeNav}  // Trigger closeNav when a link is clicked
                />
            ))}
        </nav>
    )
}

export default NavlinksMobile
