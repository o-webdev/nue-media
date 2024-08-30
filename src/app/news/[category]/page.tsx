import NewsList from "@/app/components/NewsList"
import fetchNews from "../../../../lib/fetchNews"
import { categories } from "../../../../constants"

type Props = {
    params: {
        category: Category
    }
}
async function NewsCategoryPage({ params: { category } }: Props) {
    const news: NewsResponse = await fetchNews(category)

    return (
        <div>
            <h1 className="uppercase pl-10 pt-5 decoration-2 underline decoration-orange-400 underline-offset-2 text-xl md:text-3xl font-semibold  px-0  pb-4">
                {category}
            </h1>
            <NewsList news={news} />
        </div>
    )
}

export default NewsCategoryPage

export async function generateStaticParams() {
    return categories.map((category) => ({
        category: category
    }))
}