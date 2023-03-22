import {React, useState} from "react";
import axios from "axios";


export default function SumbitEmail(props) {
    const [email, setEmail] = useState('');

    const handleInput = (event) => {
        setEmail(event.tartget.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        axios
            .post(`/api/submit/${email}`)
            .then(response=>{
                console.log(response);
            })
            /*
            .catch(error => {
                console.log(error);
            })
            */
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    name="email"
                    onChange={handleInput}
                    /> 
                <input
                    type="submit"/>
            </form>
        </div>
    )
}