import styled from "styled-components";

export const HeaderNavContainer = styled.nav`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2rem;

    &.active{
        display: none;
    }

    &.active.showMenu{
        display: none;
    }
    &.active.showMenu{
        display: block;
        position: absolute;
        top: 230px;
        right: 0px; 
        border-radius: 5px;
    }

  

    a, button{

        background-color: #eee;
        
        padding: 1rem;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }


    a:hover svg > *{
        fill: #fb1;
    }

`
export const BurguerMenu = styled.button`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 3rem;
    background-color: #eee;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    
    &:after{
        content: '';
        display: block;
        width: 2rem;
        height: 3px;
        border-radius: 3px;
        background-color: #fb1;
        text-align: center;
        box-shadow: 0 6px #fb1, 0 -6px #fb1;
        transition:  .3s;
       
    }

    &:hover{
        border: 1px solid #fb1;
        color: #fb1;
        box-shadow:  0 0 .5rem #fb1;
    }
    &.active:after{
        transform: rotate(-90deg);
        width: 3px;
        height: 4px;
        box-shadow: 0 8px #fb1, 0 -8px #fb1;

    }
`