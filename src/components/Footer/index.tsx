import { FooterStyle} from "./style"
import {ReactComponent as Dogs} from  "../../Assets/dogs-footer.svg"
export function Footer(){
   
    return(
        <FooterStyle >
            <Dogs/>
            <p>Dogs. Alguns direitos reservados.</p>
        </FooterStyle>
    )
}
