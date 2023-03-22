import {React, useState} from "react";
import axios from "axios";


export default function SumbitEmail(props) {
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log({email})
        await axios
            .post(`/api/submit/${email}`)
            .then(response=>{
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    };
    
    const handleInput = (event) => {
        setEmail(event.target.value)
    };

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
};