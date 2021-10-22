import { NavLink } from "react-router-dom";
import { HeaderNavContainer } from "./styles";
import {ReactComponent as FeedLogo} from '../../../Assets/feed.svg'
import {ReactComponent as EstatisticaLogo} from '../../../Assets/estatisticas.svg'
import {ReactComponent as AdicionarLogo} from '../../../Assets/adicionar.svg'
import {ReactComponent as SairLogo} from '../../../Assets/sair.svg'
import { useContext } from "react";
import { userContext } from "../../../userContext";
export default function UserHeaderNav() {
    const context = useContext(userContext);
    return (
        <HeaderNavContainer>
            <NavLink to="/conta" end><FeedLogo/></NavLink>
            <NavLink to="/conta/estatisticas"><EstatisticaLogo/></NavLink>
            <NavLink to="/conta/adicionar"><AdicionarLogo/></NavLink>
            <button onClick={context.userLoggout} ><SairLogo/></button>
        </HeaderNavContainer>
    )
}
