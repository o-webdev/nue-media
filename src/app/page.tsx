import { categories } from "../../constants";
import fetchNews from "../../lib/fetchNews";
import NewsList from "./components/NewsList";
import response from "../../response.json"
async function Home() {
  // Use the response from the JSON file instead of fetching new data
  const news: NewsResponse = response as unknown as NewsResponse;

  // Return the component with the news data
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default Home;