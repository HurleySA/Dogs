
import { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { userContext } from "../../userContext"
import Loading from "../Loading"
import { LoginCreate } from "./LoginCreate"
import { LoginForm } from "./LoginForm"
import { LoginPasswordLost } from "./LoginPasswordLost"
import { LoginStyle } from "./style"




export function Login(){
    
    const {loading,login} = useContext(userContext);
    if(loading ) return <Loading/>;
    if(login) return <Navigate to="/conta"/>

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
