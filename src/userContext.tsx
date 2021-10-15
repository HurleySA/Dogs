import React, { ReactNode, useEffect, useState } from "react";
import { TOKEN_POST, USER_GET } from "../src/api";
import { toast } from 'react-toastify';
interface childrenProps {
  userLogin: (username: string, password: string) => Promise<void>,
  data: {
    email: string,
    id: number,
    nome: string,
    username:string,
  } | null,
}

interface ProviderProps {
    children: ReactNode;
  }


export const userContext = React.createContext<childrenProps>({} as childrenProps);

export const UserStorage = ({ children }: ProviderProps ): JSX.Element =>{
    const [data, setData] = useState(null);
    const [login, setLogin] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    

    useEffect(()=>{
      const token = window.localStorage.getItem('token');
      token && getUser(token)
      
  },[])

    const userLogin = async (username: string, password:string) =>{
      const {url, options} = TOKEN_POST({
        username,
        password,
      })
      const response = await fetch(url, options)
      response.ok ? toast("Animal Cadastrado") : toast.error("Animal não Cadastrado")
      const json = await response.json();
      (json.token && window.localStorage.setItem('token', json.token))
      getUser(json.token);
    }
    
    const getUser = async (token: string) => {
      const {url, options} = USER_GET(token);
      const response = await fetch(url, options);
      const json = await response.json()
      setLoading(true);
      setData(json);
      setLoading(false);
    }

    return <userContext.Provider value={{userLogin, data }}>
            {children}
          </userContext.Provider>
}
