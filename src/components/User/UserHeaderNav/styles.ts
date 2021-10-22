import styled from "styled-components";

export const HeaderNavContainer = styled.nav`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2rem;

    a, button{
        background-color: #eee;
        border-radius: 5px;
        padding: 1rem;
        border: none;
        cursor: pointer;
    }
    a:hover{
        box-shadow:  0 0 .3rem #fb1;      
    }

    a.active, button.active{
        border: 1px solid #fb1;
        color: #fb1;
        box-shadow:  0 0 .5rem #fb1;      
    }

    a.active svg > *{
        fill: #fb1;
    }

`