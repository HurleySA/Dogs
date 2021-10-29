import useForm from "../../../hooks/useForm";
import { InputForm, LabelForm, LoginButton } from "../../Login/LoginForm/style";
import { ContainerPost } from "./style";
import { toast } from 'react-toastify';
import { FormEvent, useContext, useState } from "react";
import useFormNumber from "../../../hooks/useFormNumber";
import { userContext } from "../../../userContext";

interface imgProps {
    raw: File,
}
export  function UserPost() {
    const nome = useForm();
    const peso = useFormNumber();
    const idade = useFormNumber();
    const [img, setImg] = useState({} as imgProps);

    const {postPhoto} = useContext(userContext);
    const handleSubmit = async (event: FormEvent) =>{
        event.preventDefault();
        if(!nome.value || !peso.value || !idade.value || !img ){
            toast.error("Há dados faltantes.")
        }else{
            postPhoto(img, nome, peso, idade)         
        } 
        
    }

    const handleBlurUser = (event: React.FocusEvent<HTMLInputElement>) => {
        if (event.target.value === "") toast.error("Preencha um nome.");
       
    }

    const handleBlurPeso = (event: React.FocusEvent<HTMLInputElement>) => {
        if (event.target.value === "") toast.error("Preencha um valor válido.");  
    }

    const handleChanceImg = (event: React.ChangeEvent<HTMLInputElement>) => {   
        (event.target.files && setImg({
           raw:event.target.files[0],
       }))
    }
    return (
        <ContainerPost>
            <div className="containerPost">
                <form action="" onSubmit={handleSubmit} id="form">
                        <LabelForm htmlFor="nome">
                            Nome
                        </LabelForm>
                        <InputForm 
                            type="text" 
                            id="nome"
                            name="nome"
                            value={nome.value }
                            onChange={({target}) => nome.onChange(target.value)}
                            onBlur={( event ) => handleBlurUser(event)}
                        />
                        <LabelForm htmlFor="nome">
                            Peso
                        </LabelForm>
                        <InputForm 
                            type="number" 
                            id="peso"
                            name="peso"
                            min="0"
                            onChange={({target}) => peso.onChange(+target.value)}
                            onBlur={( event ) => handleBlurPeso(event)}
                           
                        />
                        <LabelForm htmlFor="nome">
                            Idade
                        </LabelForm>
                        <InputForm 
                            type="number" 
                            id="idade"
                            name="idade"
                            min="0"
                            onChange={({target}) => idade.onChange(+target.value)}
                            onBlur={( event ) => handleBlurPeso(event)}
                           
                        />
                        <input 
                            type="file"   
                            className="postPhoneInput"  
                            onChange={( event ) => handleChanceImg(event)}
                        />
                      
                        
                    
                    
                    

                <LoginButton>Entrar</LoginButton>    
                </form>
            </div>

        </ContainerPost>
    )
}
