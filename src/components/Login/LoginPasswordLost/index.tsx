import { FormEvent } from "react"
import { toast } from 'react-toastify';
import { PASSWORD_LOST } from "../../../api";
import { InputForm, ContainerForm, LabelForm, LoginButton } from "../LoginForm/style"
import login  from "../../../Assets/login.jpg"
import useForm from "../../../hooks/useForm";


export function LoginPasswordLost(){
   
    
    const dado = useForm('');


    const handleSubmit = async (event: FormEvent) =>{
        event.preventDefault();
        if(dado.value === ""){
            toast.error("Digite seu Usuário ou Email.")
        }else{
            const {url, options} = PASSWORD_LOST({username: dado.value});   
            const response = await fetch(url,options)
            console.log(response)
            const json = await response.json();
            console.log(json)
        }
    }
    
    const handleBlurUser = (event: React.FocusEvent<HTMLInputElement>) => {
        if (event.target.value === "") toast.error("Preencha um usuário ou e-mail.");
        
    }
    return(
        <ContainerForm>
            <div className="back">
                <img src={login} alt="" />
            </div>
            <div className="wrapper">
                <h1>Perdeu a senha?</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <LabelForm htmlFor="dado">
                            Email / Usuário
                        </LabelForm>
                        <InputForm 
                            type="text" 
                            id="dado"
                            name="dado"
                            value={dado.value}
                            onChange={({target}) => dado.onChange(target.value)}
                            onBlur={( event ) => handleBlurUser(event)}
                        />
                    </div>

                    <LoginButton>Entrar</LoginButton>
                </form>
            </div>

        </ContainerForm>
    )
}