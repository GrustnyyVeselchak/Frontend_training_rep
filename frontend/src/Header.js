import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import {BrowserRouter} from "react-router-dom"
import {HashLink as Link} from "react-router-hash-link"


export default function Header(props) {
    return(
        <Box sx={{
                bgcolor: "black",
                pt: "20px",
                
                
                }}>
            <Container 
                maxWidth="md"
                sx={{    
                gridArea: 'header',
                borderBottom: 1,
                borderColor: 'grey.500',
                pb: "20px",
            }}>
                <BrowserRouter>
                    <Grid container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx = {{color: 'white'}}
                        >

                        <Grid item>
                            <Link to="#Personal" sx={{color: "white", underline: "none"}}>
                                <Typography sx={{color: "white"}}>
                                    Personal
                                </Typography>
                            </Link>
                        </Grid>

                        <Grid item>
                            <Link to="#ListOfFilms">
                                <Typography>
                                    List of films
                                </Typography>
                            </Link>
                        </Grid>
                                                    
                        <Grid item>
                            <Typography>
                                Пользователь
                            </Typography>
                        </Grid>
                    </Grid>
                </BrowserRouter>
                
            </Container>
        </Box>
    )
}