import styled from "styled-components";


export const Wrapper = styled.div
`
    display: flex;
    overflow: hidden;

`

export const Navbar = styled.div
`
    flex: 0.2; 
    background-color: rgb(0, 21, 41);  

`

export const Main = styled.div
`
    flex: 0.8;
    width: 100%

`

export const Footer = styled.div
`
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    justify-content: center;
    background-color: rgb(0, 21, 41);

    p{
        color: #B6D0E2;
    }

    ul{
        display: flex;
        flex-direction: row;
    }
    li{
        list-style: none;
        padding: 10px;
    }

    a{
    text-decoration: none;
    color: #0096FF;
    }
    
`