import React from "react";
import { useEffect } from "react";
import axios from 'axios';

import Alert from '@mui/material/Alert'

export default function Hello() {
    useEffect(() =>{
        axios
            .get("/api")
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error)
            })
        });

    return(
        <div>
            <Alert variant="filled" severity="warning">Loading...</Alert>
        </div>
        );
    
        

}