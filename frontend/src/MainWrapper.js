import React from "react";
import Hello from "./Hello";
import Personal from "./Personal";
import {Box, Container} from "@mui/material"

export default function MainWrapper(props) {
    return(
        <Box sx={{
            bgcolor: 'black',
            height: '1000px'
        }}>
            <Container>
                <Hello/>
                <Personal/>
            </Container>
        </Box>
            
    )
}