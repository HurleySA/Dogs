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
    
    button{
        cursor: pointer;
        padding: 0rem 1rem;
        font-size: 1rem;
        font-weight: 500;
        border: none;
        border-radius: .4rem;
        background: #fb1;
        color: #764701;
        box-sizing: border-box;
    }
    
`