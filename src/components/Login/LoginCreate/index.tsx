import { FormEvent, useContext } from "react"
import { toast } from 'react-toastify';
import useForm from "../../../hooks/useForm";
import { InputForm, ContainerForm, LabelForm, LoginButton } from "../LoginForm/style"
import login  from "../../../Assets/login.jpg"
import { userContext } from "../../../userContext";
export function LoginCreate(){


    const username = useForm();
    const password= useForm();
    const email= useForm();
    const {userCreate} = useContext(userContext);

    const handleSubmit = async (event: FormEvent) =>{
        event.preventDefault();
        if(!username.value || !password.value || !email.value ){
            toast.error("Digite os dados para cadastro.")
        }else{
            userCreate(username,password, email);
        }
        
        
    }

    const handleBlurUser = (event: React.FocusEvent<HTMLInputElement>) => {
        if (event.target.value === "") toast.error("Preencha um usuário.");
        
    }

    const handleBlurPassword = (event: React.FocusEvent<HTMLInputElement>) => {
        if (event.target.value === "") toast.error("Preencha uma senha.");
    }

    const handleBlurEmail = (event: React.FocusEvent<HTMLInputElement>) => {
        if (event.target.value === "") toast.error("Preencha um email.");
    }

    return(
        <ContainerForm>
            <div className="back">
                <img src={login} alt="" />
            </div>
            <div className="wrapper">
                <h1>Cadastre-se</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <LabelForm htmlFor="username">
                            Usuário
                        </LabelForm>
                        <InputForm 
                            type="text" 
                            id="username"
                            name="username"
                            value={username.value}
                            onChange={({target}) => username.onChange(target.value)}
                            onBlur={( event ) => handleBlurUser(event)}
                        />
                    </div>
                    <div>
                        <LabelForm htmlFor="email">
                            Email
                        </LabelForm>
                        <InputForm 
                            type="text" 
                            id="email"
                            name="email"
                            value={email.value}
                            onChange={({target}) => email.onChange(target.value)}
                            onBlur={( event ) => handleBlurEmail(event)}
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
                    <LoginButton>Entrar</LoginButton>
                </form>
            </div>

        </ContainerForm>
    )
}
