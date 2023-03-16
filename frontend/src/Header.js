import { Box, Container, Grid } from "@mui/material";
import React from "react";

export default function Header() {
    return(
        <Box>
            <Container sx={{ gridArea: 'header'}}>
                <Grid container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    sx = {{color: 'white'}}
                    spacing={26}>

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