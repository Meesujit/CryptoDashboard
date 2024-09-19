import styled from 'styled-components';

// Styled component for the News Container
export const NewsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
//   background-color: #f9f9f9;
//   border-radius: 8px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
`;

// Styled component for the News List (using Flexbox layout)
export const NewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;  
  list-style: none;
  padding: 0;
  margin: 0;
`;

// Styled component for individual news items (cards)
export const NewsItem = styled.li`
  background-color: #fff;
  width: 30%;  
  min-width: 300px;  
  height: 300px; 
  padding: 20px;
  margin-bottom: 20px;  
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px); 
  }

  a {
    text-decoration: none;
  }

  p{
  
    font-size: 0.8rem;
    color: #666;
    margin-top: 10px;
    }
`;

// Styled component for news title (h2)
export const NewsTitle = styled.h2`
  font-size: 0.9rem;
  color: #0073e6;
  margin-bottom: 10px;
  font-weight: bold;

  &:hover {
    color: #005bb5;
  }
`;

// Styled component for news description
export const NewsDescription = styled.p`
  font-size: 0.8rem;
  color: #666;
  line-height: 1.6;
`;

// Styled component for the link (a)
export const NewsLink = styled.a`
  text-decoration: none;

  &:hover ${NewsTitle} {
    text-decoration: underline;
  }
`;

export const CategoryContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

export const CategorySelect = styled.select`
  padding: 10px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  outline: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: all 0.2s ease;

  &:hover {
    border-color: #0073e6;
  }

  &:focus {
    border-color: #0073e6;
    box-shadow: 0 0 5px rgba(0, 115, 230, 0.5);
  }
`;