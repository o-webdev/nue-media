import LiveTimeStamp from "./LiveTimeStamp"
import ReadMoreBtn from "./ReadMoreBtn"

type Props = {
    article: Article
}
function Article({ article }: Props) {
    return (
        <article className="bg-zinc-100 cursor-pointer dark:bg-slate-800 flex flex-col 
        rounded-lg shadow-lg hover:shadow-xl transition-all md:grid 
        md:grid-cols-2 duration-200 ease-out">
            {article.image && (
                <img
                    src={article.image}
                    alt={article.title}
                    className="h-60 w-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg shadow-md"
                />
            )}

            <div className="flex-1 flex flex-col">
                <div className="flex-1 flex-flex-col p-3">
                    <h2 className="font-semibold font-sans">{article.title}</h2>

                    <section className="mt-2 flex-1">
                        <p className="text-sm line-clamp-3">{article.description}</p>
                    </section>

                    <footer className=" text-xs text-right ml-auto flex space-x-1
                pt-5 text-gray-400">
                        <p>{article.source} -</p>
                        <p>
                            <LiveTimeStamp time={article.published_at} />
                        </p>
                    </footer>
                </div>

                {/* read more button */}
                <ReadMoreBtn article={article} />
            </div>
        </article>
    )
}

export default Article