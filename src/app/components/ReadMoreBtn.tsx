'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

type Props = {
    article: Article;
};

function ReadMoreBtn({ article }: Props) {
    const router = useRouter()

    const handleClick = () => {
        const queryString = Object.entries(article)
            .map(([key, value]) => `${key}=${value}`)
            .join("&");
        const url = `/article?${queryString}`;
        console.log(url)
        router.push(url)
    }
    return (
        <Button
            onClick={handleClick}
            className="m-4 h-10"
        >
            Read More
        </Button>
    )
}

export default ReadMoreBtn