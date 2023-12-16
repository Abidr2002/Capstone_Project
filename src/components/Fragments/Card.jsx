import { useState, useEffect } from 'react';
import getNewsData from '../../services/API';

const formatDate = (pubDate) => {
  const dateObj = new Date(pubDate);
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
    hour12: false,
  };
  return dateObj.toLocaleDateString('id-ID', options);
};

// eslint-disable-next-line react/prop-types
const Card = ({ sortField, sortOrder }) => {
  const [articles, setArticles] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(6);
  const [loadMore, setLoadMore] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const healthNews = await getNewsData();
        setArticles(healthNews); // Assuming your API response has a 'data' field
      } catch (error) {
        console.error('Error fetching health news:', error);
      }
    };

    fetchArticles();
  }, []);

  const handleImageError = (index) => {
    const newArticles = [...articles];
    newArticles[index].thumbnail =
      '/images/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg';
    setArticles(newArticles);
  };

  const sortedArticles = [...articles].sort((a, b) => {
    if (sortField === 'date') {
      return sortOrder === 'asc'
        ? new Date(b.pubDate) - new Date(a.pubDate) // Reverse the order
        : new Date(a.pubDate) - new Date(b.pubDate);
    } else if (sortField === 'title') {
      return sortOrder === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    }
    return 0;
  });

  const handleLoadMore = () => {
    const nextVisibleArticles = visibleArticles + 6;

    setVisibleArticles(nextVisibleArticles);

    if (nextVisibleArticles >= sortedArticles.length) {
      setVisibleArticles(sortedArticles.length);
      setLoadMore(false);
    }
  };

  const displayArticles = sortedArticles.slice(0, visibleArticles);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-8">
        {displayArticles.map((article, index) => (
          <div key={index} className="md:px-4 md:py-4 py-2 rounded shadow-xl">
            <div>
              <img
                src={
                  article.thumbnail ||
                  '/images/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg'
                }
                alt={article.title}
                className="object-cover object-center h-60 w-full"
                onError={() => handleImageError(index)}
              />
            </div>
            <div className="py-2 h-52 md:py-0">
              <p className="font-bold">{article.title}</p>
              <p>
                {article.description
                  ? article.description.substring(0, 100) + '...'
                  : ''}
              </p>
            </div>
            <div className="flex justify-between md:px-1 px-3">
              <div className="row md:text-sm lg:text-base">
                <p>{formatDate(article.pubDate)}</p>
              </div>
              <a href={article.link} target="_blank" rel="noreferrer">
                <button className="bg-sky-900 px-3 py-2 text-white font-semibold rounded md:text-sm">
                  Read More
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {visibleArticles <= sortedArticles.length && (
        <>
          <p className="flex justify-center pt-10 pb-3">
            Show: {visibleArticles} of {sortedArticles.length} articles
          </p>
          {loadMore && (
            <div className="flex justify-center mb-5 md:mb-0">
              <button
                onClick={handleLoadMore}
                className="bg-cyan-900 px-4 py-2 text-white rounded"
              >
                Load More Pages
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Card;
