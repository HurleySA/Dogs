import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    
    
    h1{
        font-size: 4rem;
        color: #333;
        position: relative;
        margin-bottom: 1rem;
    }
    
    h1:before{
        display: block;
        content: "";
        width: 2rem;
        height: 2rem;
        background: #fb1;
        position: absolute;
        bottom: 10px;
        z-index: -1;
        border-radius: 5px;
            
    }
`