import styled from "styled-components";


export const HomeWrapper = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;

    h3{
    
      font-size: 1.5rem;
      font-weight: 600;
      color: #414A4C;
      
      }

`
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;     
  margin: -10px; 
  margin-top: 20px;       
`;

// Column styled component
export const Col = styled.div`
  flex: 1 1 45%;   
  padding: 10px;    
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex: 1 1 45%;     
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
  }
`;

export const StatisticComponent = styled.div
`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h4{  
      font-size: 1rem;
      font-weight: 400;
      color: #6F8FAF;
      
      }
    
    p{    
      font-size: 1.3rem;
      font-weight: 200;
    }


`

export const HomeContainer = styled.div
`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    gap: 30px;

`

export const HomeTitle = styled.div
` 
   h5 {
    font-size: 1rem;
    font-weight: 650;
    color: #414A4C;
   }


`

export const ShowMoreTitle = styled.div
`
    a{
      font-size: 1rem;
      text-decoration: none;
      color: #0096FF;
    }

`