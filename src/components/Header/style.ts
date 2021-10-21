import styled from "styled-components";

export const HeaderStyle =styled.section`
    width: 100%;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    position: fixed;
    top: 0;
    z-index: 100;
    background-color: #fff;

    ul{
        display: flex;
        justify-content: space-between;
    }

    li{
        padding: 1.8rem 0rem;
    }
    
    
`

export const ButtonLogin =styled.div`
    display: flex;
    width: 7rem;
    justify-content: space-around;
    font-size: 1.2rem;
    
    
`