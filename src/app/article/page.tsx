import { notFound } from "next/navigation"
import LiveTimeStamp from "../components/LiveTimeStamp";

type Props = {
    searchParams?: Article
}
function ArticlePage({ searchParams }: Props) {
    if (
        (searchParams && Object.entries(searchParams).length === 0) ||
        !searchParams
    ) {
        return notFound()
    }

    const article: Article = searchParams;

    return (
        <article>
            <section className="flex flex-col lg:flex-row pt-16 pb-24 px-0 lg:px-10 ">
                {article.image && (
                    <img
                        className="h-50 max-w-sm md:max-w-md lg:max-w-lg mx-auto 
                        object-cover rounded-lg shadow-md"
                        src={article.image}
                        alt={article.title}
                    />
                )}

                <div className="px-10">
                    <h1
                        className="uppercase pt-5 decoration-2 underline underline-offset-2 text-xl md:text-3xl font-semibold  px-0  pb-4">
                        {article.title}
                    </h1>

                    <div className="flex divide-x-2 space-x-4 divide-black dark:divide-zinc-50 ">
                        <h2 className="font-extralight text-sm"> By: {article.author || 'Unknown'}</h2>
                        <h2 className="font-extralight pl-4 text-sm">Source: {article.source}</h2>
                        <p className="pl-4 font-extralight text-sm">
                            <LiveTimeStamp time={article.published_at} /></p>
                    </div>

                    <p className="pt-4">{article.description}</p>
                </div>
            </section>
        </article>
    )
}

export default ArticlePage