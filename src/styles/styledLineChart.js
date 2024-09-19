import styled from "styled-components";

export const ChartHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

// Title for the Chart
export const ChartTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

// Container for price-related info (change and current price)
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

// Styled component for the price change percentage
export const PriceChange = styled.span`
  font-size: 1.5rem;
  color: ${({ isPositive }) => (isPositive ? '#4caf50' : '#f44336')}; // Green if positive, red if negative
  font-weight: bold;
`;

// Styled component for the current price display
export const CurrentPrice = styled.span`
  font-size: 1.2rem;
  color: #555;
  font-weight: 500;
`;