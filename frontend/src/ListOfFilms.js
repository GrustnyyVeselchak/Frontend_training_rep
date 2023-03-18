import React from "react";
import { Container, Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";
import SearchBar from "./SearchBar";
import { searchInfo } from "./searchInfo";


export default function ListFfFilms(props) {
    return (
        <Box id="ListOfFilms"
            sx={{
                bgcolor: 'black',
                height: '800px'
            }}>
                <Container maxWeigh="sm" sx={{pt: "50px"}}>
                    <SearchBar data={searchInfo} placeholder="Search here..."/>
                    <TableContainer componet = {Paper} sx = {{mt: "50px", color: "white"}} >
                        <Table aria-label = 'simple table'sx = {{color: "white"}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx = {{color: "white"}}>Name</TableCell>
                                    <TableCell sx = {{color: "white"}}>year</TableCell>
                                    <TableCell align="center" sx = {{color: "white"}}>My rating</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody> 
                                {searchInfo.map((film)=>(
                                    <TableRow key={film.name}>
                                        <TableCell sx = {{color: "white"}}>{film.name}</TableCell>
                                        <TableCell sx = {{color: "white"}}>{film.year}</TableCell>
                                        <TableCell align="center" sx = {{color: "white"}}>{film.my_rating}</TableCell>
                                    </TableRow>
                                ))}
                             </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </Box>   
    )
}