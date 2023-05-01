import { Grid, Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper}  from "@mui/material";
import { Container } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import {React, useState} from "react";
import './SearchBar.css'
import { searchInfo } from "./searchInfo";

export default function SearchBar(props) {
  const[query, setQuery] = useState("")
  return (
    <Box id="ListOfFilms"
            sx={{
                bgcolor: 'black',
                height: '800px'
            }}>
      <Container maxWidth="md">
        <Grid container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                color: "white", 
                borderBottom: 1, 
                borderColor: 'grey.500',
                pb: "5px"
                }}
        >
          <Grid item className="search">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Search..." 
                        autoFocus="true"
                        onChange={(e)=> setQuery(e.target.value)}/>
                    </div>
          </Grid>

          <Grid item>
            <SearchIcon className="icon"
              sx={{
                bgcolor: "black",
                color: "white",
                }}/>
          </Grid>
        </Grid> 
      </Container>

      <Container 
        maxWeigh="sm" 
        sx={{pt: "50px"}}
        >
          <TableContainer componet = {Paper} sx = {{mt: "50px", color: "white"}} >
            <Table aria-label = 'simple table'sx = {{color: "white"}}>
              <TableHead>
                <TableRow>
                  <TableCell sx = {{color: "white"}}>word</TableCell>
                  <TableCell sx = {{color: "white"}}>transcription</TableCell>
                  <TableCell align="center" sx = {{color: "white"}}>translation</TableCell>
                  <TableCell sx = {{color: "white"}}>explanation</TableCell>
                </TableRow>
              </TableHead>

              <TableBody> 
                {searchInfo.filter(film=>
                film.word.includes(query)).map((film)=>(
                  <TableRow key={film.word}>
                    <TableCell sx = {{color: "white"}}>{film.word}</TableCell>
                    <TableCell sx = {{color: "white"}}>{film.transcription}</TableCell>
                    <TableCell sx = {{color: "white"}}>{film.translation}</TableCell>
                    <TableCell sx = {{color: "white"}}>{film.explanation}</TableCell>
                  </TableRow>
                  ))}
              </TableBody>
              
            </Table>                        
          </TableContainer>
      </Container>
    </Box>
  )
}