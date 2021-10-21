import React, { ReactNode, useEffect, useState } from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../src/api";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router";
interface childrenProps {
  userLogin: (username: string, password: string) => Promise<void>,
  data: {
    email: string,
    id: number,
    nome: string,
    username:string,
  } | null,
  login: boolean,
  loading: boolean,
  userLoggout: () => void,
}

interface ProviderProps {
    children: ReactNode;
  }


export const userContext = React.createContext<childrenProps>({} as childrenProps);

export const UserStorage = ({ children }: ProviderProps ): JSX.Element =>{
    const [data, setData] = useState(null);
    const [login, setLogin] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    console.log();
    
    const getUser = React.useCallback(async (token: string) => {
      const {url, options} = USER_GET(token);
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
      setLogin(true);
    },[])

    const userLoggout = React.useCallback(async () =>{
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem('token');
      (window.location.href !== 'http://localhost:3000' && navigate("/login"));
    },[navigate])

    useEffect(()=>{
      const autologin = async () => {
        const token = window.localStorage.getItem('token');
        if(token) {
         try{
          setError(null);
          setLoading(true);
          const {url, options} = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if(!response.ok) throw new Error('Token inválido')
        
          await getUser(token)
         }
         catch(err){
          userLoggout();
         }finally{
          setLoading(false);
         }
        }
      }
     
      autologin();
      
      
  },[getUser,setLoading])

    const userLogin = async (username: string, password:string) =>{
      try{
        setError(null);
        setLoading(true);
        const {url, options} = TOKEN_POST({
          username,
          password,
        })
        const response = await fetch(url, options)
        if(!response.ok) throw new Error (`Error: ${response.statusText}`);
        const json = await response.json();
        (json.token && window.localStorage.setItem('token', json.token))
        await getUser(json.token);
      
      }catch (err){
        toast.error("Animal não Cadastrado")
        setLogin(false);
      }finally{
        setLoading(false);
      }
    }
    
    

    return <userContext.Provider value={{userLogin, data, login, loading, userLoggout }}>
            {children}
          </userContext.Provider>
}
