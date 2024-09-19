import React, { useState } from 'react';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { 
  NewsContainer,
  NewsList,
  NewsItem,
  NewsTitle,
  NewsDescription,
  NewsLink,
  CategoryContainer,
  CategorySelect, 
  } from '../styles/styledNews';
import moment from 'moment';

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency'); 
  const { data: cryptoData } = useGetCryptosQuery(100);

  // Fetch news based on the selected category and count
  const { data: cryptoNews, isLoading } = useGetCryptoNewsQuery({ 
    newsCategory, 
    count: simplified ? 6 : 12 
  });

  const handleCategoryChange = (e) => {
    setNewsCategory(e.target.value); // Update category state on dropdown change
  };

  // Loading state
  if (isLoading) return <div>Loading...</div>;

  console.log(cryptoNews);

  return (
    <>
      {
        !simplified && (
          <CategoryContainer>
            <CategorySelect 
              onChange={handleCategoryChange}
              name="category" 
              id="category"
            >
              <option value="Cryptocurrency">Cryptocurrency</option>
              {cryptoData?.data?.coins?.map((currency) => (
                <option key={currency.id} value={currency.name}>
                  {currency.name}
                </option>
              ))}
            </CategorySelect>
          </CategoryContainer>
        ) 
      }
      <NewsContainer>
        <h1>Crypto News</h1>
        <NewsList>
          {cryptoNews?.data?.map((news, index) => (
            <NewsItem key={index}>
              <NewsLink href={news.url} target="_blank" rel="noopener noreferrer">
                <NewsTitle>{news.title}</NewsTitle>
              </NewsLink>
              <NewsDescription>
                {news.description.length > 100 
                  ? `${news.description.substring(0, 100)}...` 
                  : news.description}
              </NewsDescription>
              <p>{moment(news.datePublished).startOf('ss').fromNow()}</p>
            </NewsItem>
          ))}
        </NewsList>
      </NewsContainer>
    </>
  );
};

export default News;
