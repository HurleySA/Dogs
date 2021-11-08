import { HomeStyle } from "./style"

import Loading from "../Loading";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../userContext";
import Feed from "../Feed";

export function Home(){
   
   
    const context = useContext(userContext)
    const [pages, setPages] = useState([1]);
    const [infinite, setInfinite] = useState(true);
    useEffect(() => {
        let wait = false;
        const handleScroll = () => {
           if(infinite){
            const scroll = window.scrollY;
            const heightPage = document.body.offsetHeight - window.innerHeight;
            if(scroll > heightPage *0.80 && !wait){
                setPages((pages) => [...pages, pages.length + 1])
                wait = true;
                setTimeout(()=> wait = false, 500)
            } 
           }
            
        }
        window.addEventListener('wheel', handleScroll)
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('wheel', handleScroll)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [infinite])

    if( context.loading) return <Loading/>
    return(
        <HomeStyle className="container">
            {pages.map((page) => {
                return <Feed key={page} page={page} total={3} user={undefined} setInfinite={setInfinite} />
            })}     
        </HomeStyle>
    )
}
