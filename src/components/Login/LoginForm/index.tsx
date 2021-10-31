import { FormEvent, useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import useForm from "../../../hooks/useForm";
import { InputForm, ContainerForm, LabelForm, LoginButton, CadastrarButton } from "./style";
import login  from "../../../Assets/login.jpg"
import { userContext } from "../../../userContext"

export function LoginForm(){
    const username = useForm('');
    const password= useForm('');
    const context = useContext(userContext)

    const handleSubmit = async (event: FormEvent) =>{
        event.preventDefault();
        const userValue = username.value;
        const passwordValue = password.value;
        if(!userValue || !passwordValue){
            toast.error("Digite seu Usuário e Senha.")
        }else{
            context.userLogin(userValue, passwordValue);
        }
        
    }

    const handleBlurUser = (event: React.FocusEvent<HTMLInputElement>) => {
        if (event.target.value === "") toast.error("Preencha um usuário.");
        
    }

    const handleBlurPassword = (event: React.FocusEvent<HTMLInputElement>) => {
        if (event.target.value === "") toast.error("Preencha uma senha.");
    }

    return(
        <ContainerForm>
            
            <div className="back">
                <img src={login} alt="" />
            </div>
            <div className="wrapper">
                <h1>Login</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <LabelForm htmlFor="username">
                            Usuário
                        </LabelForm>
                        <InputForm 
                            type="text" 
                            id="username"
                            name="username"
                            value={username.value  }
                            onChange={({target}) => username.onChange(target.value)}
                            onBlur={( event ) => handleBlurUser(event)}
                        />
                    </div>
                    <div>
                        <LabelForm htmlFor="password">
                            Senha
                        </LabelForm>
                        <InputForm 
                        type="password" 
                        id="password"
                        name="password"
                        value={password.value}
                        onChange={({target}) => password.onChange(target.value)}    
                        onBlur={( event ) => handleBlurPassword(event)}
                    />
                    </div>
                    
                    

                    {context.loading ? <LoginButton disabled>Carregando</LoginButton> : <LoginButton>Entrar</LoginButton>}
                </form>

                <span>
                    <Link to="redefinir">Perdeu a Senha?</Link>
                </span>

                <div className="cadastro">
                    <h2>Cadastre-se</h2>
                    <p>Ainda não possui conta? Cadastre-se no site.</p>
                    <CadastrarButton> <Link to="criar">Cadastrar</Link></CadastrarButton>
                   
                </div>
            </div>
        </ContainerForm>
    )
}
