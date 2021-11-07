import { useContext, useEffect} from "react";
import { Acess, Stats } from "./style";
import { Chart } from "react-google-charts";
import { userContext } from "../../../userContext";
import Loading from "../../Loading";

export  function Estatistica() {
    const {getStat, acessos, photos, feedData, options, loading} = useContext(userContext)

    useEffect(()=>{
        const autoAtt = async () =>{
            await getStat();
        }
        autoAtt();
    },[getStat])

    if(loading) return <Loading/>;
    return (
       
        <Stats>
            <Acess>Acessos: {acessos}</Acess>
            <Acess>Número de fotos do feed: {photos}</Acess>
            <div style={{display: "flex"}}>
            {feedData.length > 1 && <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            data={feedData}
            options={options}
          /> }
         </div>  
        </Stats>
    )
}
