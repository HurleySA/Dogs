import { useEffect, useState } from "react"

import visualizacao from "../../Assets/visualizacao.svg"
import { PHOTOS_GET } from "../../api";
import { Itens, Item } from "./styles";
 interface photoProps{
    id: number,
    author: string,
    title: string,
    date: string,
    src: string,
    peso: string,
    idade: string,
    acessos: number,
    total_comments: string,

}

  

export default function Feed({page, total, user}: {page:number, total:number, user:string | undefined}) {
    const [feed, setFeed] = useState<photoProps[]>([]);
    useEffect(()=>{
        try{
            const atualizaFeed = async () =>{
    
                const body = {page, total, user};  
                const {url, options} = PHOTOS_GET(body);
                const response = await fetch(url, options);
                const json = await response.json();
                setFeed(json);
            }
            atualizaFeed();
        }
        catch(err){
            console.log(err)
        }
        
    },[setFeed, page, total, user])
  
    return (
            <Itens>
            {feed.map((photo) =>  {
               return <Item key={photo.id} >  
                <img src={photo.src} alt="" /> 
                <span> <img src={visualizacao} alt="" />{photo.acessos}</span> 
               </Item>
            })}
            </Itens>
    )
}
