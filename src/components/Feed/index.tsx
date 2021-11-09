import { Dispatch, MouseEvent, SetStateAction, useCallback, useEffect, useState } from "react"

import visualizacao from "../../Assets/visualizacao.svg"
import { PHOTOS_GET } from "../../api";
import { Itens, Item } from "./styles";
import FeedModal from "./FeedModal";
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

export default function Feed({page, total, user, setInfinite}: {page:number, total:number, user:number | undefined, setInfinite:Dispatch<SetStateAction<boolean>>}) {
    const [feed, setFeed] = useState<photoProps[]>([]);
    const [modal, setModal] = useState({} as photoProps)

    const atualizaFeed = useCallback(async () =>{
        const body = {page, total, user};  
        const {url, options} = PHOTOS_GET(body);
        const response = await fetch(url, options);
        const json = await response.json();
        if(response && response.ok && json.length < 3){
            setInfinite(false);
        }
        setFeed(json);
    },[setFeed, page, total, user, setInfinite])

    useEffect(()=>{
        try{       
            atualizaFeed();
        }
        catch(err){
            console.log(err)
        }
        return () => {
            setFeed([]);
        }
        
    },[atualizaFeed])
    
    const incrementaCurtida = async (e: MouseEvent, photo:photoProps) => {
        await atualizaFeed();
        setModal(photo);
    }
    return ( 
       <>
        {modal.id  && <FeedModal modal={modal} setModal={setModal} atualizaFeed={atualizaFeed} /> }
        <Itens>
        {feed.map((photo) =>  {
           return <Item key={photo.id} onDoubleClick={(event) => incrementaCurtida(event,photo)}>  
            <img src={photo.src} alt="" /> 
            <span> <img src={visualizacao} alt="" />{photo.acessos}</span> 
           </Item>
        })}
        </Itens>
       </>
    )
}
