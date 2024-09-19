import styled from 'styled-components';



export const NavContainer = styled.nav`
    position: fixed;
    left: 0;
    margin: 0;
    height: auto;
    background-color: rgb(0, 21, 41);


`;


// Define the container for the logo and title
export const LogoContainer = styled.div`
    background-color: #001529;
    display: flex;
    padding: 20px;
    align-items: center;
    width: 100%;
    gap: 10px;

  img {
    width: 40px;   
    height: 40px;
    border-radius: 50%; 
    margin:0 0 0 15px;
  }

  a {
    font-size: 1.5rem;     
    font-weight: 600;     
    margin: 0;            
    color: #0096FF;
    cursor: pointer; 
    text-decoration: none;      

  }
`;

export const MenuControlButton = styled.button`
  display: none;  // Hide by default

  @media (max-width: 800px) {
    display: block;  // Show the button on small screens
    background: transparent;
    border: none;
    font-size: 1.8rem;
    cursor: pointer;
    color: #333;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;  // Dark background for the menu
  padding: 1rem;
  width: 100%;
  height: 100vh;           // Full height of the viewport
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); // Subtle shadow for depth
`;

export const MenuItem = styled.div`
  margin: 1rem 0;         // Spacing between items
  padding: 0.5rem;
  transition: background-color 0.3s ease;  // Smooth hover effect

  a {
    color: #fff;          // White text for links
    text-decoration: none;
    font-size: 1.1rem;    // Slightly larger font for better visibility
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &:hover {
    background-color: #333;  // Darker background on hover
    border-radius: 8px;      // Rounded corners
  }
`;