import React, { useState, useEffect } from "react";
import { API_KEY } from "../constants";

const News = () => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("finance");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=publishedAt&apiKey=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`Error fetching news: ${response.statusText}`);
        }
        const data = await response.json();
        setNews(data.articles || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();

    const interval = setInterval(fetchNews, 86400000); // 86400000 ms = 24 hours
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.search.value); // Update search term and trigger fetch
  };

  return (
    <div className="container mx-auto px-4 bg-green-50 py-8">
      <h1 className="text-3xl font-bold mb-4 px-10 text-center">
        Trending News
      </h1>

      <form onSubmit={handleSearch} className="mb-8 px-10 text-center">
        <input
          type="text"
          name="search"
          defaultValue={searchTerm}
          placeholder="Search for news..."
          className="border p-2 w-2/3 rounded-l"
        />
        <button
          type="submit"
          className="border p-2 bg-blue-500 text-white rounded-r"
        >
          Search
        </button>
      </form>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div>
          {news.length === 0 ? (
            <p className="text-center">No news found.</p>
          ) : (
            news.map((article, index) =>
              article.title ? (
                <div
                  key={index}
                  className="mb-4 border-b pb-4 pl-4 hover:bg-green-100"
                >
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-black"
                  >
                    <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                    {article.urlToImage && (
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="mb-2 w-32 h-32 object-cover"
                      />
                    )}
                    <p className="text-gray-700">{article.description}</p>
                  </a>
                </div>
              ) : null
            )
          )}
        </div>
      )}
    </div>
  );
};

export default News;
