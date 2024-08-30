import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb, us"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  //  fetch function to get response caching....
  const res = await fetch(
    "https://kochoro.eu-central-a.ibm.stepzen.net/api/kindled-panther/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );
  console.log(
    "LOADING NEW DATA FROM API for category >>>",
    category,
    keywords
  )

  const newsResponse = await res.json();

  //  Sort via images vs not images
  const news = sortNewsByImage(newsResponse.data.myQuery);

  // return res
  return news;
};

export default fetchNews;

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=0becb389cd2e0d993b6eee8f3c0efad2&countries=us%2Cgb&limit=10&offset=0&sort=published_desc"
