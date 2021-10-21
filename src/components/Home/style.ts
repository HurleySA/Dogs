import styled from "styled-components";

export const HomeStyle = styled.section`
    padding-top: 8rem;
    width: 100%;

    ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
    }

    ul li:nth-child(2){
        grid-column: 2/4;
        grid-row: span 2;
    }

    ul li img {
        border-radius: 5px;
    }

 

`