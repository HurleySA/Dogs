import React, { ReactNode, useEffect, useState } from "react";
import { PHOTO_POST, TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET, USER_POST } from "../src/api";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router";

interface formProps{
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string | number>>;
  onChange: (newValue: string | number) => void;
}
interface imgProps {
  raw: File,
}
interface childrenProps {
  userLogin: (username: string | number, password: string | number) => Promise<void>,
  data: {
    email: string,
    id: number,
    nome: string,
    username:string,
  } | null,
  login: boolean,
  loading: boolean,
  userLoggout: () => void,
  userCreate: (username: formProps, password: formProps, email: formProps) => Promise<void>,
  postPhoto: (img: imgProps, nome: formProps, peso: formProps, idade: formProps) => Promise<void>
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
    
    const getUser = React.useCallback(async (token: string) => {
      const {url, options} = USER_GET(token);
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
      setLogin(true);
    },[])

    const userLoggout = React.useCallback( () =>{
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem('token');
      navigate('/login');
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
          else setLogin(true);
          await getUser(token);
         }
         catch(err){
          setLogin(false);
          console.log(err)
         }finally{
          setLoading(false);
         }
        }else{
          setLogin(false);
          
        }
      }  
      autologin();
  },[getUser, userLoggout])


    const userLogin = async (username: string | number, password:string | number) =>{
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
  
    const userCreate = async (username: formProps, password: formProps, email:formProps)=>{
     try{
      setError(null);
      setLoading(true);
      const {url, options} = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value
      })
      const response = await fetch(url,options)
      if(!response.ok){
        username.setValue('');
        password.setValue('');
        email.setValue('');
        throw new Error (`Error: ${response.statusText}`)
      }
      toast("Animal Cadastrado")
      navigate('/login')
     }catch(err){
      toast.error("Usuário ou Email já cadastrado")
      setLogin(false);
     }
     finally{
      setLoading(false);
    }
    }

    const postPhoto = async (img: imgProps, nome: formProps, peso: formProps, idade:formProps) =>{
      const formData = new FormData();
      const raw = img.raw;
      const nomeValue = nome.value;
      const pesoValue =  `${peso.value}`;
      const idadeValue = `${idade.value}`;
      if(typeof nomeValue === 'string')      formData.append('nome', nomeValue);
      formData.append('img', raw);

      formData.append('peso',pesoValue);
      formData.append('idade', idadeValue);
      

      const token = window.localStorage.getItem('token');
      if(token){
          const {url, options} = PHOTO_POST(formData,token);
          const response = await fetch(url, options);
          if(!response.ok) throw new Error('Dados inválidos')
          navigate('/conta')
      } 
      
    }

    return <userContext.Provider value={{userLogin, data, login, loading, userLoggout, userCreate, postPhoto }}>
            {children}
          </userContext.Provider>
}
