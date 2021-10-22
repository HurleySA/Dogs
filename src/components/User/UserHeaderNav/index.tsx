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

        window.addEventListener('resize', changeMatch);
        return () => {
            window.removeEventListener('resize', changeMatch);
        }
    }, [])
   
    return (
        <>
            {mobile && <BurguerMenu className={menuMobileActive ? "active" : ""} onClick={() => setMenuMobileActive(!menuMobileActive)}></BurguerMenu>}
            <HeaderNavContainer className={`${mobile ? "active" : ""} ${menuMobileActive ? "showMenu" : ""}`}>
                    <NavLink to="/conta" end><FeedLogo/></NavLink>
                    <NavLink to="/conta/estatisticas"><EstatisticaLogo/></NavLink>
                    <NavLink to="/conta/adicionar"><AdicionarLogo/></NavLink>
                    <button onClick={context.userLoggout} ><SairLogo/></button>
            </HeaderNavContainer>
        </>
    )
}
