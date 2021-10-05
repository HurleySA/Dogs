import { Link, Routes, Route } from "react-router-dom"
import { LoginCreate } from "./LoginCreate"
import { LoginForm } from "./LoginForm"

import { LoginStyle } from "./style"
export function Login(){
   
    return(
        <LoginStyle>
            <Routes>
                <Route path="/" element={<LoginForm/>} />
                <Route path="/criar" element={<LoginCreate/>} />

            </Routes>
        </LoginStyle>
    )
}
