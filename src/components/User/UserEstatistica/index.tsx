import { useCallback, useEffect, useState } from "react";
import { STATS_GET } from "../../../api";
import { Acess, Stats } from "./style";
import { Chart } from "react-google-charts";

export  function Estatistica() {

    interface statsProps {
        id: number,
        title: string,
        acessos: string 
    }

    const [stats, setStats] = useState<statsProps[]>([]);
    const [acessos, setAcessos] = useState(0);
    const [options, setOptions] = useState({
        
      })
      //(string | number)[][]
    const [data, setData] = useState<(string | number)[][]>([
        ['Linguagens', 'Quantidade'],
        
      ])
    
      const getStat = useCallback(async ()=>{
        const {url, options} = STATS_GET();
        const response = await fetch(url, options);
        const json:statsProps[] = await response.json();
        setStats(json)
        const total = json.reduce((prev, curr) => prev + (+curr.acessos), 0)
        setAcessos(total);
        const result = stats.map((e)=>([e.title ,+e.acessos]));
        setData([['Linguagens', 'Quantidade'], ...result]);
        
    },[stats])

    useEffect(()=>{
        const autoAtt = async () =>{
            await getStat();
        }
        autoAtt();
    },[getStat])

    return (
        <Stats>
            <Acess>Acessos: {acessos}</Acess>
            <div style={{display: "flex"}}>
            {data.length > 1 && <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            data={data}
            options={options}
          /> }
        </div>  
        </Stats>
    )
}
