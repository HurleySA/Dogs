import styled from "styled-components";

export const Itens = styled.ul`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
        margin-bottom: 10px;

        @media (max-width: 900px){
            &{
                grid-template-columns: 1fr;
            }
        }
     
   

    `
     export const Item = styled.li`

    &{
        display: grid;
        justify-items: center;
        align-items: center;
        
        }
    &:hover{
        cursor: pointer;
    }
     &:nth-child(2){
        grid-column: 2/4;
        grid-row: span 2;
    }
    @media (max-width: 900px){
        &:nth-child(2){
            grid-column: 1;
        }
    }

    & img {
        border-radius: 5px;
        grid-area: 1/1;
    }
    & span {
        display: none;
        font-size: 1.5rem;
        color: white;
        grid-area: 1/1;
    }


    &:hover span {
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