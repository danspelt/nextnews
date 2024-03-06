import { useFetchNews } from "./fetchers";
import NewsCard from "./components/NewsCard";
export default function Home() {
  const news = useFetchNews();

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">NextNews</h1>
      <p className="text-center mb-4">Your go-to source for the latest news articles</p>
      <div className="container mx-auto px-4">
        {news ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {news.then((articles) => {
              return articles.articles.map((article, index) => (
                <NewsCard key={index} article={article} />
              ));
            })}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}