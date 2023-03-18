import {React,  useEffect} from "react";
import axios from "axios";


export default function SumbitEmail(props) {
    
    useEffect(()=>(
        axios
            .post("/api/submit/:email")
            .then(response=>{
                console.log(response);
            })   
    ));

    return(
        <div>
            <form>
                <input
                    type="text"
                    />
                <input
                    type="submit"/>
            </form>
        </div>
    )
}