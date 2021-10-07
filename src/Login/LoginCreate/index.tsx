import { useState, FormEvent } from "react"
import { toast } from 'react-toastify';
import { InputForm, ContainerForm, LabelForm, LoginButton } from "../LoginForm/style"
import login  from "../../Assets/login.jpg"
export function LoginCreate(){

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [blurUsername, setBlurUsername] = useState(false);
    const [blurEmail, setBlurEmail] = useState(false);
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

    const handleBlurEmail = (event: React.FocusEvent<HTMLInputElement>) => {
        (event.target.value === "") ? setBlurEmail(true) : setBlurEmail(false);
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
                            value={username}
                            onChange={({target}) => setUsername(target.value)}
                            onBlur={( event ) => handleBlurUser(event)}
                        />
                    </div>
                    {blurUsername && <p className="notify" >Preencha um usuário.</p> }
                    <div>
                        <LabelForm htmlFor="email">
                            Email
                        </LabelForm>
                        <InputForm 
                            type="text" 
                            id="email"
                            name="email"
                            value={email}
                            onChange={({target}) => setEmail(target.value)}
                            onBlur={( event ) => handleBlurEmail(event)}
                        />
                    </div>
                    {blurEmail && <p className="notify" >Preencha um usuário.</p> }
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
            </div>

        </ContainerForm>
    )
}
