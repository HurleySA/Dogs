
import { Routes, Route } from "react-router-dom"
import { LoginCreate } from "./LoginCreate"
import { LoginForm } from "./LoginForm"
import { LoginPasswordLost } from "./LoginPasswordLost"
import { LoginPasswordReset } from "./LoginPasswordReset"
import { LoginStyle } from "./style"




export function Login(){
  

 
    return(
        <LoginStyle>  

            <Routes>
                <Route path="/" element={<LoginForm/>} />
                <Route path="/criar" element={<LoginCreate/>} />
                <Route path="/redefinir" element={<LoginPasswordLost/>} />
                <Route path="/" element={<LoginPasswordReset/>} />
            </Routes>
        </LoginStyle>
    )
}
