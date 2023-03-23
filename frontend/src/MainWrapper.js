import { Container, Box } from "@mui/material";
import React from "react";


export default function MainWrapper(props) {
    return(
        <Box
            sx={{
                bgcolor: 'black'

            }}>
            <Container>
            {props.children}
            </Container> 
        </Box>    
    )
}