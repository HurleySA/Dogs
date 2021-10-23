import useForm from "../../../hooks/useForm";
import { InputForm, LabelForm, LoginButton } from "../../Login/LoginForm/style";
import { ContainerPost } from "./style";
import { toast } from 'react-toastify';
import { FormEvent, useState } from "react";
export  function UserPost() {
    const username = useForm();
    const peso = useForm();
    const idade = useForm();
    const [img, setImg] = useState({});

    const handleSubmit = (event: FormEvent) =>{
        event.preventDefault();
        console.log({username, peso, idade});
    }

    const handleBlurUser = (event: React.FocusEvent<HTMLInputElement>) => {
        if (event.target.value === "") toast.error("Preencha um nome.");
       
    }

    const handleBlurPeso = (event: React.FocusEvent<HTMLInputElement>) => {
        if (event.target.value === "") toast.error("Preencha um valor válido.");  
    }

    const handleBlurImg = (event: React.FocusEvent<HTMLInputElement>) => {
        (event.target.files && console.log(event.target.files[0]));
    }
    return (
        <ContainerPost>
            <div className="containerPost">
                <form action="" onSubmit={handleSubmit}>
                        <LabelForm htmlFor="username">
                            Nome
                        </LabelForm>
                        <InputForm 
                            type="text" 
                            id="username"
                            name="username"
                            value={username.value  }
                            onChange={({target}) => username.onChange(target.value)}
                            onBlur={( event ) => handleBlurUser(event)}
                        />
                        <LabelForm htmlFor="username">
                            Peso
                        </LabelForm>
                        <InputForm 
                            type="number" 
                            id="peso"
                            name="peso"
                            min="0"
                            onChange={({target}) => peso.onChange(target.value)}
                            onBlur={( event ) => handleBlurPeso(event)}
                           
                        />
                        <LabelForm htmlFor="username">
                            Idade
                        </LabelForm>
                        <InputForm 
                            type="number" 
                            id="idade"
                            name="idade"
                            min="0"
                            onChange={({target}) => idade.onChange(target.value)}
                            onBlur={( event ) => handleBlurPeso(event)}
                           
                        />
                        <input 
                            type="file"   
                            className="postPhoneInput"  
                            onBlur={( event ) => handleBlurImg(event)}
                        />
                      
                        
                    
                    
                    

                <LoginButton>Entrar</LoginButton>    
                </form>
            </div>

        </ContainerPost>
    )
}
