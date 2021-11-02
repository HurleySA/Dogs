
import { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { userContext } from "../../userContext"
import Loading from "../Loading"
import { LoginCreate } from "./LoginCreate"
import { LoginForm } from "./LoginForm"
import { LoginPasswordLost } from "./LoginPasswordLost"
import { LoginStyle } from "./style"




export function Login(){
    
    const context = useContext(userContext);
    console.log(context.loading)
    console.log(context.login)
    if(context.loading && !context.login ) return <Loading/>;
    if(context.login) return <Navigate to="/conta"/>

    return(
        <LoginStyle>  

            <Routes>
                <Route path="/" element={<LoginForm/>} />
                <Route path="/criar" element={<LoginCreate/>} />
                <Route path="/redefinir" element={<LoginPasswordLost/>} />
            </Routes>
        </LoginStyle>
    )
}
