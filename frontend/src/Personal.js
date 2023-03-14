import React from "react";
import { Container,Grid, Avatar, Link, Typography } from "@mui/material";

export default function Personal(props) {
    return(
        <div>
            <Container maxWidth="sm">
                <Grid container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    >
                    <Avatar src ="./logo.png"
                        sx={{
                            mt: 10,
                            mb: 3, 
                            width: 400, 
                            height: 400 
                        }}/>
                    <Typography sx={{color: "white", }} variant="h2">GrustnyyVeselchak</Typography>
                    <Link href="https://github.com/GrustnyyVeselchak" >
                        <Typography variant="h5">My GitHub</Typography>
                    </Link> 
                </Grid>  
            </Container>
        </div>
    )  
} 