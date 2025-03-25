import { useEffect, useState } from "react";
import {medicine} from "../../articles-api"


export default function Help () {
    const [help, setHelp] = useState([]);

    useEffect (() =>{

        async function fech () { 
            try{
                const data = await medicine()
                setHelp(data)
            }catch {}
        }

        fech ()
    }, [])




    return (<div> {help.map (el => <li key={el.id}>
        <img src={el.urls.small} alt={el.alt_description} width={50} /> </li>)}
        </div>
        )

}