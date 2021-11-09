import { NotFoundStyle } from "./styles";
import {ReactComponent as Dog} from "../../Assets/dogs.svg"

export function NotFound(){

    return(
        <>
            <NotFoundStyle>
               <p>Ops, Page not Found...</p>
               <Dog  />
            </NotFoundStyle>
        </>
    )
}