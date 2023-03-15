import React from "react";
import { Container, Box, Grid, Avatar, Link, Typography, } from "@mui/material";



export default function Personal(props) {
    return(
        <div>
            <Container maxWidth="sm">
                <Grid container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    >
                    <Box sx={{
                        mt: 5,
                        mb: 5, 
                        border: 2,
                        borderRadius: '50%',
                        borderColor: 'grey.500',
                        boxShadow: 10,
                         }}>
                        <Avatar src ="./logo.png"
                            sx={{
                                borderColor: 'white', 
                                width: 400, 
                                height: 400 
                            }}/>
                    </Box>
                    
                    <Typography sx={{color: "white"}} variant="h2">Grustnyy Veselchak</Typography>
                    <Link href="https://github.com/GrustnyyVeselchak" >
                        <Typography variant="h5">My GitHub</Typography>
                    </Link> 
                </Grid>  
            </Container>
        </div>
    )  
} 