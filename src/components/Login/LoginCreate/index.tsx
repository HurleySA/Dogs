import { FormEvent } from "react"
import { toast } from 'react-toastify';
import useForm from "../../../hooks/useForm";
import { InputForm, ContainerForm, LabelForm, LoginButton } from "../LoginForm/style"
import login  from "../../../Assets/login.jpg"
import { USER_POST } from "../../../api";
import { useNavigate } from "react-router";
export function LoginCreate(){

    const username = useForm();
    const password= useForm();
    const email= useForm();
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent) =>{
        event.preventDefault();
        const {url, options} = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value
        })
        const responsePost = await fetch(url,options)
        if(responsePost.ok){
            toast("Animal Cadastrado")
            navigate('/login')
        }else{
            toast.error("Usuário ou Email já cadastrado")
            username.setValue('');
            password.setValue('');
            email.setValue('');
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
