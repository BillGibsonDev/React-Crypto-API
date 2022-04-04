import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    margin: auto;
    scroll-behavior: smooth;
    width: 80%;
    max-width: 1200px;
    background: #000000;
    letter-spacing: .5px;
    font-family: 'Space Mono', monospace;
    @media (max-width: 1450px){
        font-size: 90%;
    } 
    @media (max-width: 1220px){
        width: 90%;
        font-size: 70%;
    }
    @media (max-width: 750px){
        width: 95%;
    } 
}

ul {
    list-style-type: none;
}
a {
    text-decoration: none;
}



`;

export default GlobalStyles;