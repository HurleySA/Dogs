import { HeaderStyle, ButtonLogin } from "./style"
import dogs from  "../../Assets/dogs.svg"
import usuario from  "../../Assets/usuario.svg"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { userContext } from "../../userContext"

export function Header(){

    const context = useContext(userContext);
    return(
        <HeaderStyle >
                <ul className="container">
                    <li> 
                        <Link to="/">
                            <img src={dogs} alt="Logo Dogs" />
                        </Link> 
                    </li>
                    {context.data ? 
                    <li> 
                        <Link to="/conta">
                            <ButtonLogin> 
                                <span>{context.data.email}</span>  
                                <img src={usuario} alt="" />
                            </ButtonLogin> 
                        </Link>
                    </li> :
                    <li> 
                    <Link to="/login">
                        <ButtonLogin> 
                            <span>Login / Criar</span>  
                            <img src={usuario} alt="" />
                        </ButtonLogin> 
                    </Link>
                </li>
                    }
                    
                </ul>
        </HeaderStyle>
    )
}
