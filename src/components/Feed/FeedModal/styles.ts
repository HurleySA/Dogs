import styled from "styled-components";

export const ModalStyle = styled.div`
    width: calc(100vw - 18px);
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;

 
`
export const ModalItem = styled.div`
    display: flex;
    position: relative;
    height: 650px;

    
    .fechar{
        width: 40px;
        height: 40px;
        border-radius: 10px;
        border: none;
        background-color: #fb1;
        position: absolute;
        top: -10px;
        left: -10px;
        border: 1px solid #000;
        font-size: 1.5rem;
        font-weight: bold;
    }

    .fechar:hover{
        background-color: #000;
        color: #fb1;
        cursor: pointer;
        border: 1px solid #fb1;
    }
    
    img{
        max-width: 650px;
    }

    

    .wrapper{
        background-color: #fff;
        padding: 1rem 2rem 1rem 2rem;
        width: 20rem;
        position: relative;
    }

    .title{
        display: flex;
        justify-content: space-between;
        color:#333;
        font-size: 1.2rem;
    }

    .wrapper h1{
        font-size: 4rem;
        color: #333;
        margin-bottom: 1rem;
        border-bottom: 6px solid #fb1;
        width: 70%;
    }

    .medidas{
        display: flex;
        justify-content: start;
        gap: 20px;
        padding: 1rem 0rem;

    }

    .medidas h2:before{
        display: inline-block;
        content: "";
        width: 3px;
        height: 70%;
        background-color: #fb1;
        margin: 0rem .5rem 0rem 0rem;
    }

    .coment{
        display: flex;
        position: absolute;
        bottom: 10px;
    
    }
    .comentarios{
        font-size: 1.2rem;
    }

    .coment svg{
        background-color: transparent;
    }
`
