import Image from "next/image";
import { useFetchNews } from "./fetchers";
import NewsCard from "./components/NewsCard";
export default function Home() {
  const news = useFetchNews();

  return (
    <div>
      <h1>NextNews</h1>
      <p>Your go-to source for the latest news articles</p>
      {news ? (
        news.then((articles) => {
          return articles.articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ));
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
