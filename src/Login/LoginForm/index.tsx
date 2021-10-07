import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { InputForm, ContainerForm, LabelForm, LoginButton, CadastrarButton } from "./style";
import login  from "../../Assets/login.jpg"

export function LoginForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [blurUsername, setBlurUsername] = useState(false);
    const [blurPassword, setBlurPassword] = useState(false);

    const handleSubmit = (event: FormEvent) =>{
        event.preventDefault();
        fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
        .then(res => {
            res.ok ? toast("Animal Cadastrado") : toast.error("Animal não Cadastrado")

            return res.json()
        })
        .then(json => console.log(json))
        .catch((erro) =>{
            toast.error("Animal não Cadastrado")
            return erro
        }
        )
    }

    const handleBlurUser = (event: React.FocusEvent<HTMLInputElement>) => {
        (event.target.value === "") ? setBlurUsername(true) : setBlurUsername(false);
        
    }

    const handleBlurPassword = (event: React.FocusEvent<HTMLInputElement>) => {
        (event.target.value === "") ? setBlurPassword(true) : setBlurPassword(false);
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
                            value={username}
                            onChange={({target}) => setUsername(target.value)}
                            onBlur={( event ) => handleBlurUser(event)}
                        />
                    </div>
                    {blurUsername && <p className="notify" >Preencha um usuário.</p> }
                    <div>
                        <LabelForm htmlFor="password">
                            Senha
                        </LabelForm>
                        <InputForm 
                        type="password" 
                        id="password"
                        name="password"
                        value={password}
                        onChange={({target}) => setPassword(target.value)}    
                        onBlur={( event ) => handleBlurPassword(event)}
                    />
                    </div>
                    {blurPassword && <p className="notify">Preencha uma senha.</p> }
                    
                    

                    <LoginButton>Entrar</LoginButton>
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
