import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../../atom/button";
import Region from "../../template/region";

function StarWars() {
    let [data, setData] = useState([{}]);
    let [prev, setPrev] = useState("");
    let [next, setNext] = useState("");
    let [url, setUrl] = useState("https://swapi.dev/api/people");
    
    useEffect(() => {
        axios({
            method: 'get',
            url: url
        }).then((response) => {
            // console.log(response.data);
            console.log(response.data.previous);
            setPrev(response.data.previous);
            setData(response.data.results);
            setNext(response.data.next);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [url]);

    return(
        <div>
            <Region data={data}/>

            <Button onclick={() => setUrl(prev)} disable={prev == null ? true : false}>Previous</ Button>
            <Button onclick={() => setUrl(next)} disable={data.length < 10 ? true : false}>Next</Button>
        </div>
    )
    
}

export default StarWars;