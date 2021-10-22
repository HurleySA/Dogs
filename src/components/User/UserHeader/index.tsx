import { useState } from "react";
import { useLocation } from "react-router";
import UserHeaderNav from "../UserHeaderNav";
import { HeaderContainer } from "./styles";


export default function UserHeader() {
    const [title, setTitle] = useState('Minha Conta')
    const {pathname} = useLocation();
    console.log(pathname);

    if(pathname === '/conta' && title !== 'Minha Conta') setTitle('Minha Conta');
    if(pathname === '/conta/estatisticas' && title !== 'Estatística') setTitle('Estatística');
    if(pathname === '/conta/adicionar' && title !== 'Poste Sua Foto') setTitle('Poste Sua Foto');
            
    return (
        <HeaderContainer>
            <h1>{title}</h1>
            <UserHeaderNav/>
        </HeaderContainer>
    )
}
