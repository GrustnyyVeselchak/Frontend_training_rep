import React from "react";
import { Container, Box } from "@mui/material";
import SearchAppBar from "./SearchBar";
import { searchInfo } from "./searchInfo";

export default function ListFfFilms(props) {
    return (
        <Box id="ListOfFilms"
            sx={{
                bgcolor: 'black',
                height: '800px'
            }}>
                <Container maxWeigh="sm" sx={{pt: "100px"}}>
                    <SearchAppBar data={searchInfo}/>
                </Container>
            </Box>
        
    )
}