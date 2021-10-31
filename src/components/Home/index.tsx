import { HomeStyle } from "./style"
import { useContext, useEffect, useState } from "react"
import { userContext } from "../../userContext";
export function Home(){
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
   
    const context = useContext(userContext)
    const [feed, setFeed] = useState<photoProps[]>([]);
    useEffect(()=>{
        fetch("https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=6&user=0")
        .then(res => res.json())
        .then(json => {
            setFeed(json)})
        .catch(error => console.log(error))
    },[feed])
    return(
        <HomeStyle className="container">
            {context.loading ? <div>CARREGANDO</div> : <ul>
            {feed.map((photo) =>  {
               return <li key={photo.id}> <img src={photo.src} alt="" /> </li>
            })}
            </ul>}
            
        </HomeStyle>
    )
}
