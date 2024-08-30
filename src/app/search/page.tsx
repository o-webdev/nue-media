import fetchNews from "../../../lib/fetchNews";
import NewsList from "../components/NewsList";

type Props = {
    searchParams?: { term: string }
};

async function SearchPage({searchParams}: Props) {
    const news: NewsResponse = await fetchNews(
        "general",
        searchParams?.term,
        true
    )
    return (
        <div>
            <h1 className="pl-10 pt-5 text-2xl underline underline-offset-4 uppercase decoration-orange-400">Search results for: {searchParams?.term}</h1>
            <NewsList news={news} />
        </div>
    )
}

export default SearchPage