import React from "react";
import { useEffect, useState} from "react";
import axios from 'axios';

import { Container, Alert, Snackbar } from "@mui/material";


export default function Hello(props) {
    const [hello, setHello] = useState()
    /*const [error, setError] = useState()*/
    const [open, setOpen] = useState(true);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        
        setOpen(false);
    };
    useEffect(() =>{
        axios
            .get("/api")
            .then(response => {
                setHello(response.data.message);
            })

            /*
            .catch(error => {
                setError.error(error);
            })
            */
            
        });
    
    return(
        <Container maxWidth="sm">
            <Snackbar 
                open={open} 
                autoHideDuration={1000} 
                onClose={handleClose} 
                anchorOrigin={{ vertical:'top', horizontal: 'left',  }}
                sx = {{tm: '10px'}}> 
                {hello ? 
                        <Alert 
                            variant="filled" 
                            severity="success" 
                            onClose={handleClose}
                            sx={{ width: '100%' }}
                        >
                            {hello}
                        </Alert>
                    : 
                        <Alert 
                            variant="filled" 
                            severity="warning" 
                            onClose={handleClose}
                            sx={{ width: '100%' }}
                        >
                            Loading....
                        </Alert>}
            </Snackbar>
        </Container>     
        );
}