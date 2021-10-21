import { HomeStyle } from "./style"
import { useEffect, useState } from "react"
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
   
    const [data, setData] = useState<photoProps[]>([]);
    useEffect(()=>{
        fetch("https://dogsapi.origamid.dev/json/api/photo")
        .then(res => res.json())
        .then(json => {
            setData(json)})
        .catch(error => console.log(error))
    },[])


    return(
        <HomeStyle className="container">
            <ul>
            {data.map((photo) =>  {
               return <li key={photo.id}> <img src={photo.src} alt="" /> </li>
            })}
            </ul>
            
        </HomeStyle>
    )
}
