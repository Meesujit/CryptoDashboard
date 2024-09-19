import styled from "styled-components";




// Main container for all the crypto cards
export const CryptoCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;           // Allows wrapping of cards to the next line
  justify-content: space-between;  // Space between cards
  gap: 20px;                 // Add some space between rows
  padding: 20px;             // Padding around the container
  box-sizing: border-box;
`;

// Individual crypto card container
export const CryptoCard = styled.div`
  background-color: #fff;    // White background for the cards
  border: 1px solid #e0e0e0; // Light gray border
  border-radius: 10px;       // Rounded corners
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); // Subtle shadow for depth
  width: calc(33.333% - 20px); // 3 cards per row (minus the gap)
  padding: 20px;             // Inner padding for card content
  transition: transform 0.3s ease, box-shadow 0.3s ease; // Smooth hover effect

  // Ensure the card has a smooth hover effect
  &:hover {
    transform: translateY(-5px);  // Lift the card on hover
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2); // Increase shadow on hover
  }

  a {
    text-decoration: none;  // Remove underline from the link
    color: inherit;         // Inherit text color
  }

  img.crypto-image {
    width: 50px;            // Size of the crypto icon
    height: 50px;
    object-fit: contain;
    margin-bottom: 10px;    // Space between image and text
  }

  p {
    margin: 5px 0;          // Small margin between paragraphs
    color: #333;            // Darker text color for readability
  }

  h3 {
    color: #333;            // Darker text for the card title
    font-size: 1.2rem;      // Adjust title font size
    margin-bottom: 10px;
  }

  // Responsive design: Adjust for tablets and smaller screens
  @media (max-width: 768px) {
    width: calc(50% - 20px);  // 2 cards per row for tablet size screens
  }

  @media (max-width: 480px) {
    width: 100%;              // Full width (1 card per row) on small screens
  }
`;

export const Card = styled.div``

export const SearchCrypto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #f4f4f4;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #007bff;
  }
`;