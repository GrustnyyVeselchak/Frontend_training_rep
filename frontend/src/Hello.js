import React from "react";
import { useEffect, useState} from "react";
import axios from 'axios';

import Alert from '@mui/material/Alert'

export default function Hello(props) {
    const [hello, setHello] = useState()
    const [error, setError] = useState()
    useEffect(() =>{
        axios
            .get("/api")
            .then(data => {
                setHello(data.data.message);
            })
            .catch(error => {
                setError.error(error);
                console.error(error);
            })
            
        });
    
    return(
        <div>
            <Alert variant="filled" severity="warning">Loading....</Alert>
            <Alert variant="filled" severity="success">{hello}</Alert>
        </div>
        );
}