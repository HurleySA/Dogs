import { useContext } from "react";
import { Navigate } from "react-router";
import { Routes, Route } from "react-router-dom";
import { userContext } from "../../userContext";
import { Home } from "../Home";
import { ContainerConta } from "./styles";
import {Estatistica} from "./UserEstatistica";
import {UserHeader} from "./UserHeader";
import {UserPost} from "./UserPost";

export function User(){

    const {login } = useContext(userContext);
    if(login === null) return null;
    else if(login === false) return<Navigate to="/login"/>;

    return(
      
        <ContainerConta className="container">
              <UserHeader/>
              <Routes>
                <Route path="/" element={<Home/> } />
                <Route path="/estatisticas" element={<Estatistica/> } />
                <Route path="/adicionar" element={<UserPost/>} />
                
               
            </Routes>
        </ContainerConta>
    )
}