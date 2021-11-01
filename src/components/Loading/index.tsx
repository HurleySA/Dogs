import { LoadingScreen } from "./styles";
import {ReactComponent as LoadingLogo} from '../../Assets/carregando.svg'

export default function Loading() {
    return (
        <LoadingScreen>
            <LoadingLogo/>
        </LoadingScreen>
    )
}
