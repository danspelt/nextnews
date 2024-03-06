export const useFetchNews = async () => {
  const news = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`);
  return news.json();
};