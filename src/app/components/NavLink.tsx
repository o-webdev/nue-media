import Link from "next/link";

type Props = {
    category: string;
    isActive?: boolean;
    onClick?: () => void; // Add onClick as an optional prop
}

function NavLink({ category, isActive, onClick }: Props) {
    return (
        <Link 
            href={`/news/${category}`} 
            className={`navlink ${isActive ? "underline decoration-orange-400 underline-offset-8 font-medium" : ""}`}
            onClick={onClick} // Trigger the onClick function when the link is clicked
        >
            {category}
        </Link>
    )
}

export default NavLink;
