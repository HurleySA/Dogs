import { useContext } from "react";
import { Navigate } from "react-router";
import { Routes, Route } from "react-router-dom";
import { userContext } from "../../userContext";
import Feed from "../Feed";
import Loading from "../Loading";
import { ContainerConta } from "./styles";
import {Estatistica} from "./UserEstatistica";
import {UserHeader} from "./UserHeader";
import {UserPost} from "./UserPost";

export function User(){

    const {login, data, loading } = useContext(userContext);
    if(!login && !loading){
        return<Navigate to="/login"/>;
    }
    if(!login && loading){
        return <Loading/> 
        
    }

    return(
      
        <ContainerConta className="container">
              <UserHeader/>
              <Routes>
                <Route path="/" element={<Feed page={1} total={6} user={data?.id} /> } />
                <Route path="/estatisticas" element={<Estatistica/> } />
                <Route path="/adicionar" element={<UserPost/>} />
                
               
            </Routes>
        </ContainerConta>
    )
}