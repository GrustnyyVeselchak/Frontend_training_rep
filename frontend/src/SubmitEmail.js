import {React, useState} from "react";
import axios from "axios";


export default function SumbitEmail(props) {
    const [email, setEmail] = useState({
        email: ''
    })
    const handleInput = (event) => {
        setEmail({...email, [event.tartget.name]: event.tartget.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(email)
        axios
            .post(`/api/submit/:email`, {email})
            .then(response=>{
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                email: <input
                    type="text"
                    onChange={handleInput}
                    name="email"
                    /> 
                <input
                    type="submit"/>
            </form>
        </div>
    )
}