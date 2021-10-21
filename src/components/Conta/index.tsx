import { useContext } from "react";
import { Navigate } from "react-router";
import { userContext } from "../../userContext";
import { ContainerConta } from "./styles";

export function Conta(){

    const {login } = useContext(userContext);
    if(login === null) return null;
    else if(login === false) return<Navigate to="/login"/>;

    return(
        <ContainerConta>
            Conta
            
        </ContainerConta>
    )
}