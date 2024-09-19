import styled from 'styled-components';

// Main Container
export const CoinDetailsContainer = styled.div`
  padding: 20px;
//   background-color: #f8f9fa;

`;

// Heading Container
export const CoinHeadingContainer = styled.div`
  margin-bottom: 20px;
`;

// Coin Name
export const CoinName = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

// Timeframe Dropdown
export const SelectTimeframe = styled.select`
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: white;
  width: 100%;
  max-width: 200px;
`;

// Stats Container
export const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
`;

// Coin Value Statistics
export const CoinValueStatitics = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

// Coin Value Statistics Title
export const CoinValueStatiticsTitle = styled.div`
  margin-bottom: 20px;
`;

// Coin Detailed Heading
export const CoinDetailedHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
`;

// Coin Stats
export const CoinStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
`;

// Coin Stats Name
export const CoinStatsName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    margin: 0;
    font-size: 1.2rem;
    color: #666;
  }
  
  svg {
    width: 24px;
    height: 24px;
    color: #666;
  }
`;

// Coin Value
export const CoinValue = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
`;

// Paragraph inside the heading container
export const CoinHeadingParagraph = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 5px;
`;



// Main Container for Description and Links
export const CoinDescLink = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
  padding: 20px;
  
`;

// Description Section Container
export const CoinDesc = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

export const CoinLink = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

// Heading (Coin Detailed Heading reused here)
// export const CoinDetailedHeading = styled.h2`
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: #333;
//   margin-bottom: 15px;
// `;

// Styled Paragraph for Coin Description
export const CoinDescriptionText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
`;

// Container for Each Link
export const CoinContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

// Title for the Type of Link
export const CoinTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: #444;
  margin: 0;
`;

// Anchor Link Styling
export const CoinLinkAnchor = styled.a`
  font-size: 1.1rem;
  color: #1a73e8;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #0c5cbf;
    text-decoration: underline;
  }

  &:visited {
    color: #551a8b;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px #0c5cbf;
  }
`;

