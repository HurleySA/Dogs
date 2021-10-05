import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api"
import { InputForm, ContainerForm, LabelForm } from "./style";
import login  from "../../Assets/login.jpg"

export function LoginForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
            res.ok ? alert("Animal Cadastrado") : alert("Animal não Cadastrado")

            return res.json()
        })
        .then(json => console.log(json))
        .catch((erro) =>{
            alert("Animal não Cadastrado")
            return erro
        }
        )
    }

    return(
        <ContainerForm>
            <img src={login} alt="Login Dog"/>
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
                        />
                    </div>

                    <div>
                        <LabelForm htmlFor="username">
                            Senha
                        </LabelForm>
                        <InputForm 
                        type="password" 
                        id="password"
                        name="password"
                        value={password}
                        onChange={({target}) => setPassword(target.value)}    
                    />
                    </div>
                    
                    

                    <button>Entrar</button>
                </form>

                <span>
                    <Link to="redefinir">Perdeu a Senha?</Link>
                </span>

                <div className="cadastro">
                    <h2>Cadastre-se</h2>
                    <p>Ainda não possui conta? Cadastre-se no site.</p>
                    <button> <Link to="criar">Cadastrar</Link></button>
                   
                </div>
            </div>
        </ContainerForm>
    )
}
