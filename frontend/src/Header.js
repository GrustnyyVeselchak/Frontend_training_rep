import { Box, Container, Grid } from "@mui/material";
import React from "react";

export default function Header() {
    return(
        <Box>
            <Container sx={{ gridArea: 'header'}}>
                <Grid 
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx = {{color: 'white'}}>
                    <Grid item xs={2}>
                        <h1></h1>
                    </Grid>
                        
                    <Grid item>
                        <h1>Навигация</h1>
                    </Grid>
                        
                    <Grid item>
                        <h1>Пользователь</h1>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}