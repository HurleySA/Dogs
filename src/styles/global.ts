import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    ul, li{
        list-style:none;
    }
    
    img{
        display: block;
        max-width: 100%;
    }

    button, input{
        display: block;
        font-size: 1rem;
        color: #333;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    
    .container {
        max-width: 1220px;
        margin: 0 auto;
    }
`