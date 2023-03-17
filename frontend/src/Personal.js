import React from "react";
import { Container, Box, Grid, Avatar, Link, Typography, } from "@mui/material";



export default function Personal(props) {
    return(
        <Box sx={{
                bgcolor: 'black',
                height: '800px'
        }}>
            <Container maxWidth="sm" id="Personal">
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
                                <Avatar src ="./logo2.png"
                                    sx={{
                                        borderColor: 'white', 
                                        width: 400, 
                                        height: 400 
                                }}/>
                    </Box>
                        
                    <Typography 
                        sx={{
                            color: "white", 
                            borderBottom: 1, 
                            borderColor: 'grey.500',
                            pb: "5px"
                            }} 
                            variant="h2"
                    >Grustnyy Veselchak
                    </Typography>

                    <Link href="https://github.com/GrustnyyVeselchak" >
                        <Typography variant="h5" sx={{mt:"20px"}}>My GitHub</Typography>
                    </Link> 
                </Grid>  
            </Container>
        </Box>
    )  
} 