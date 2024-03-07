import Image from "next/image";
const NewsCard = ({ article }) => {
  return (
    <div className="max-w-sm card p-4 bg-gray-100 overflow-hidden shadow-lg">
      {article.urlToImage ? (
        <Image
          src={article.urlToImage}
          alt={article.title}
          width={300}
          height={200}
          className="w-full"
        />
      ) : (
        <Image
          src="/images/news-placeholder.webp"
          alt="Article Image Placeholder"
          width={300}
          height={200}
          className="w-full"
        />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{article.title}</div>
        <p className="text-gray-700 text-base">{article.summary}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={article.readMoreUrl}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
