import React, { useState, useEffect } from 'react';
import { API_KEY } from '../constants';

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
      fetchNews();
    }, []);
  
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=finance&apiKey=${API_KEY}`);
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
  
    return (
      <div className="container mx-auto px-4 bg-green-50 py-8"> {/* Added background color and padding */}
        <h1 className="text-3xl font-bold mb-4 px-10 text-center">Trending News</h1> {/* Centered the heading */}
        <div>
          {news.map((article, index) => (
            // Skip rendering if title is not available
            article.title ? (
              <div key={index} className="mb-4 border-b pb-4 pl-4 hover:bg-green-100"> {/* Added left padding */}
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <img src={article.urlToImage} alt={article.title} className="mb-2 w-32 h-32 object-cover" />
                <p className="text-gray-700">{article.description}</p>
              </div>
            ) : null
          ))}
        </div>
      </div>
    );
};

export default News;
