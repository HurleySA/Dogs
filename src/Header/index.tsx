import { HeaderStyle, ButtonLogin } from "./style"
import dogs from  "../Assets/dogs.svg"
import usuario from  "../Assets/usuario.svg"
import { Link } from "react-router-dom"
export function Header(){
   
    return(
        <HeaderStyle >
                <ul className="container">
                    <li> 
                        <Link to="/">
                            <a href="#"></a><img src={dogs} alt="Logo Dogs" />
                        </Link> 
                    </li>
                    <li> 
                        <Link to="/Login">
                            <ButtonLogin> 
                                
                                <span>Login / Criar</span>  
                                <img src={usuario} alt="" />
                            
                                
                            </ButtonLogin> 
                        </Link>
                    </li>
                </ul>
        </HeaderStyle>
    )
}
