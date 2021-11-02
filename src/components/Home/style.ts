import styled from "styled-components";

export const HomeStyle = styled.section`
    padding-top: 8rem;
    width: 100%;
    min-height: 100vh;
    ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
    }
    ul li{
        display: grid;
        justify-items: center;
        align-items: center;
    }
    ul li:hover{
        cursor: pointer;
    }
    ul li:nth-child(2){
        grid-column: 2/4;
        grid-row: span 2;
    }

    ul li img {
        border-radius: 5px;
        grid-area: 1/1;
    }
    ul li span {
        display: none;
        font-size: 1.5rem;
        color: white;
        grid-area: 1/1;
    }


    ul li:hover span {
        display: block;
        animation: slidein 1s forwards;
        background-color: rgba(0,0,0,0.8);
        padding: .3rem .5rem;
        border-radius: 8px;
        
    }
    @keyframes slidein {
        from {
            margin-left: -10px;
            opacity: 0;
        }

        to {
            margin-left: 0px;
            opacity: 1;
        }
    }


 

`