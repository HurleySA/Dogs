import { useContext } from "react";
import { Navigate } from "react-router";
import { userContext } from "../../userContext";
import { ContainerConta } from "./styles";
import UserHeader from "./UserHeader";

export function User(){

    const {login } = useContext(userContext);
    if(login === null) return null;
    else if(login === false) return<Navigate to="/login"/>;

    return(
      
        <ContainerConta className="container">
              <UserHeader/>
        </ContainerConta>
    )
}