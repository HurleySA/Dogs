import { HomeStyle } from "./style"

import Loading from "../Loading";
import { useContext } from "react";
import { userContext } from "../../userContext";
import Feed from "../Feed";

export function Home(){
   
   
    const context = useContext(userContext)
    
    return(
        <HomeStyle className="container">
            {context.loading ? <Loading/> : <Feed page={1} total={6} user={undefined} />}
            
        </HomeStyle>
    )
}
