import { Link } from "react-router-dom";
import { ModalItem, ModalStyle } from "./styles";
import {ReactComponent as Enviar} from "../../../Assets/enviar.svg"
import useForm from "../../../hooks/useForm";
import { useCallback, useEffect, useState } from "react";
import { COMMENT_POST, PHOTO_GET } from "../../../api";


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

interface comentsProps{
    comment_ID: string,
    comment_agent: string,
    comment_approved: string,
    comment_author: string,
    comment_author_IP: string,
    comment_author_email: string,
    comment_author_url: string,
    comment_content: string,
    comment_date: string,
    comment_date_gmt: string,
    comment_karma: string,
    comment_parent: string,
    comment_post_ID: string,
    comment_type: string,
    user_id: string,

}

interface feedModalProps{
    modal: photoProps,
    setModal: (photo: photoProps) => void,
    atualizaFeed: () => Promise<void>,
}
export default function FeedModal({modal, setModal, atualizaFeed}: feedModalProps) {
    const comentario = useForm('');
    const [coments, setComents] = useState<comentsProps[]>([]);
    const handleClick = () =>{
        setModal({} as photoProps);
        atualizaFeed();
    }

    const createComment = () =>{
        const fetchComment = async()=>{
            const {url, options} = COMMENT_POST(modal.id, {comment: comentario.value});
            const response = await fetch(url, options);
            const json = await response.json();
            setComents([...coments, json])
            comentario.setValue('');
        }
        fetchComment();
        
    }

    const loadComents = useCallback(async () => {
        const {url, options} = PHOTO_GET(modal.id);
        const response = await fetch(url, options);
        const json = await response.json();
        setComents(json.comments)
        console.log(...json.comments)
        }, [modal.id])

    useEffect(() => {     
            loadComents();
        }
        ,[loadComents])


    return (
        <ModalStyle onClick={(e) => {
            if(e.target === e.currentTarget) {setModal({} as photoProps);
            atualizaFeed();
        }
            
            }}>   
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
                        {coments.map((coment:comentsProps) => {
                           return <li key={coment.comment_ID}><strong> {coment.comment_author}: </strong> {coment.comment_content}</li>
                        })}
                    </div>
                    <div className="coment">
                        <input
                         type="text"
                         value={comentario.value}
                         onChange={({target}) => comentario.onChange(target.value)}
                        />
                        <button onClick={createComment}>
                            <Enviar/>
                        </button>
                    </div>
                </div>
            </ModalItem>
        </ModalStyle>
    )
}
