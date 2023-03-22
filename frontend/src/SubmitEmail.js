import { React, useState} from "react";
import axios from "axios";

import { Alert, Snackbar } from "@mui/material";



export default function SumbitEmail(props) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [err, setErr] = useState('');
    const [open, setOpen] = useState(false);

    const handleInput = (event) => {
        setEmail(event.target.value)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log({email})
        await axios
            .post(`/api/submit/${email}`)
            .then(response=>{
                setStatus(response.data.message);
            })
            .catch(error => {
                setErr('error ebta blat')
            })
    };

    const handleClick = () => {
        setOpen(true);
      };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

      const action = (
        <div>
            {status ? 
                        <Alert 
                            variant="filled" 
                            severity="success" 
                            onClose={handleClose}
                            sx={{ width: '100%' }}
                        >
                            {status}
                        </Alert>
                    : 
                        <Alert 
                            variant="filled" 
                            severity="warning" 
                            onClose={handleClose}
                            sx={{ width: '100%' }}
                        >
                            {err}
                        </Alert>}
        </div>
            
      );
    
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
                    type="submit"
                    onClick={handleClick}/>
                    <Snackbar 
                        open={open} 
                        autoHideDuration={3000} 
                        anchorOrigin={{ vertical:'top', horizontal: 'left',  }}
                        action={action}
                        onClose={handleClose}
                        > 
                    </Snackbar>
            </form>
        </div>

        
    )
};