import { NavLink } from "react-router-dom";
import { HeaderNavContainer, BurguerMenu } from "./styles";
import {ReactComponent as FeedLogo} from '../../../Assets/feed.svg'
import {ReactComponent as EstatisticaLogo} from '../../../Assets/estatisticas.svg'
import {ReactComponent as AdicionarLogo} from '../../../Assets/adicionar.svg'
import {ReactComponent as SairLogo} from '../../../Assets/sair.svg'
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../../userContext";
export default function UserHeaderNav() {
    const context = useContext(userContext);
    const [mobile, setMobile] = useState<null | boolean>(null);
    const [menuMobileActive, setMenuMobileActive] = useState<null | boolean>(null);

    useEffect(() => {

        const changeMatch = () =>{
            const {matches} = window.matchMedia("(max-width: 900px)")
            setMobile(matches);
        }
        changeMatch();

        window.addEventListener('resize', changeMatch);
        
        return () => {
            window.removeEventListener('resize', changeMatch);
            
        }
    }, [])
   
    return (
        <>
            {mobile && <BurguerMenu className={mobile ? "active" : ""} onClick={() => setMenuMobileActive(!menuMobileActive)}></BurguerMenu>}
            <HeaderNavContainer className={`${mobile ? "active" : ""} ${menuMobileActive ? "showMenu" : ""}`}>
                    <NavLink to="/conta" onClick={() => setMenuMobileActive(!menuMobileActive)} end>
                        <FeedLogo/>
                        {mobile && 'Minhas fotos'}
                        </NavLink>
                    <NavLink to="/conta/estatisticas" onClick={() => setMenuMobileActive(!menuMobileActive)}>
                        <EstatisticaLogo/>
                        {mobile && 'Estatísticas'}
                        </NavLink>
                    <NavLink to="/conta/adicionar" onClick={() => setMenuMobileActive(!menuMobileActive)}>
                        <AdicionarLogo/>
                        {mobile && 'Adicionar Foto'}
                        </NavLink>
                    <button onClick={context.userLoggout} >
                        <SairLogo/>
                        {mobile && 'Sair'}
                        </button>
            </HeaderNavContainer>
        </>
    )
}
