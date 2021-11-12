import styled from "styled-components";
export const ContainerForm = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;   
    justify-content: space-around;
    gap: 3rem;
    min-height: 100vh;

  

    .back{
        grid-column: 2;
        width: 650px;
    }

    .wrapper{
        margin-top: 10rem;
        animation: slidein .3s;
        width: 400px;
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
        margin-bottom: 2rem;
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

    .notify{
        color: #f31;
        margin-bottom: .5rem;
        animation: slidein .3s;

    }
    @media (max-width: 1401px){
 
        &{
            grid-template-columns:30px 1fr 1fr; 
        }

        .back{
            width: 650px;
        }

    @media (max-width: 1200px){
       
        &{
            grid-template-columns:30px 1fr 1fr; 
        }

        .back{
            width: 450px;
            display: flex;
            align-self: center;
        }
    }
    @media (max-width: 900px){
       
        &{
            grid-template-columns:40px 1fr 40px; 
            justify-content: center;
        }
        .wrapper{
            grid-column: 2;
        }

        .back{
            display: none;
        }
    }
   
 }

`
export const LoginButton = styled.button`
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

    &:hover{
        box-shadow:  0 0 .5rem #fb1;         
    }
`
export const CadastrarButton = styled.button`
    cursor: pointer;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 500;
    border: none;
    border-radius: .4rem;
    background: #fb1;
    color: #764701;
    box-sizing: border-box;
    margin-bottom: 3rem;

    &:hover{
        box-shadow:  0 0 .5rem #fb1;         
    }
`

export const LabelForm = styled.label`
     color: #8d8d8d;
`

export const InputForm = styled.input`
    outline: none;
    width: 100%;
    padding: 1rem;
    background-color: #eee;
    border: 1px solid #eee;
    border-radius: 5px;
    display: block;
    margin: .5rem 0rem 1rem ;

    @media (max-width: 1401px){
        &{
            padding: 1rem 15rem 1rem 1rem;
        }
    }

    @media (max-width: 1260px){
        &{
            padding: 1rem 15rem 1rem 1rem;
        }
    }

    @media (max-width: 1200px){
        &{
            padding: 1rem 10rem 1rem 1rem;
        }
    }
    @media (max-width: 900px){
        &{
            padding: 1rem 10rem 1rem 1rem;
        }
    }

    &:focus, &:hover{
        border: 1px solid #fb1;
        box-shadow:  0 0 .5em #fb1;
        background-color: #fff;
    }

`

