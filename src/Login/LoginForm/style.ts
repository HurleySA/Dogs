import styled from "styled-components";

export const ContainerForm = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;    
    gap: 3rem;

    .wrapper{
        margin-top: 10rem;
    }

    .wrapper h1{
        font-size: 4rem;
        color: #333;
        position: relative;
        margin-bottom: 1rem;
    }

    .wrapper h1:before{
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


    button {
        cursor: pointer;
        padding: 1rem 3rem;
        font-size: 1rem;
        font-weight: 500;
        border: none;
        border-radius: .4rem;
        background: #fb1;
        color: #764701;
        box-sizing: border-box;
        margin-bottom: 3rem;
        
    }

    .wrapper span{
        font-size: 1.5rem;
        color: #333;
        text-decoration: underline 2px solid rgba(51, 51, 51, .8);
        padding: 0rem 0rem 6rem;
        display: block;

    }

    
    .wrapper div h2{
        font-size: 2.5rem;
        color: #333;
        position: relative;
        margin-bottom: 3rem;
        
    }
    
    .wrapper div h2:before{
        display: block;
        content: "";
        width: 3.5rem;
        height: .8rem;
        background: rgba(51, 51, 51, .3);
        position: absolute;
        bottom: -10px;
        z-index: -1;
        border-radius: 5px;
            
    }

    .wrapper div p{
        font-size: 1.4rem;
        color: #333;
    }

`

export const LabelForm = styled.label`
     color: #8d8d8d;
`

export const InputForm = styled.input`
    outline: none;
    padding: 1rem 20rem 1rem 1rem;
    background-color: #eee;
    border: 1px solid #eee;
    border-radius: 5px;
    display: block;
    margin: .5rem 0rem 1rem ;

    &:focus, &:hover{
        border: 1px solid #fb1;
        box-shadow:  0 0 .5em #fb1;
        background-color: #fff;
    }

`

