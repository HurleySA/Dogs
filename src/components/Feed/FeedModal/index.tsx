import { Link } from "react-router-dom";
import { ModalItem, ModalStyle } from "./styles";
import {ReactComponent as Enviar} from "../../../Assets/enviar.svg"


interface photoProps{
    id: number,
    author: string,
    title: string,
    date: string,
    src: string,
    peso: string,
    idade: string,
    acessos: string,
    total_comments: string,

}

interface feedModalProps{
    modal: photoProps,
    setModal: (photo: photoProps) => void,
}
export default function FeedModal({modal, setModal}: feedModalProps) {
    const handleClick = () =>{
        setModal({} as photoProps);
    }


    return (
        <ModalStyle>   
            <ModalItem>
                <button className="fechar" onClick={handleClick}>X</button>
                <img className="img" src={modal.src} alt="" />
                <div className="wrapper">
                    <div className="title">
                        <Link to="/login">@{modal.author}</Link>
                        <p>{modal.acessos}</p>
                    </div>
                    <h1>{modal.title}</h1>
                    <div className="medidas">
                        <h2>{modal.peso} kg</h2>
                        <h2>{modal.idade} anos</h2>
                    </div>
                    <div>
                        {modal.total_comments}
                    </div>
                    <div className="coment">
                        <input type="text" />
                        <button>
                            <Enviar/>
                        </button>
                    </div>
                </div>
            </ModalItem>
        </ModalStyle>
    )
}
