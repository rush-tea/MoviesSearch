import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MoviesList from "./MoviesList";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=8b8450ed&s=${searchTerm}`
    );
    setMoviesList(response.data.Search);
    setLoading(false);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2} direction="row">
          <TextField
            id="filled-basic"
            label="Search for a Movie..."
            variant="filled"
            sx={{ width: "70%" }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="contained" onClick={handleSearch}>
            Search
          </Button>
        </Stack>
      </Box>
      {
        loading ? <div style={{margin: "auto"}}>
        <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#4fa94d" 
            ariaLabel="three-dots-loading"
            visible={true}
        /></div> : (
            moviesList && moviesList.length ? (
                <MoviesList moviesList={moviesList} />
            ) : (
                <div>
                    No Movies Found, Search Again
                </div>
            )
        )
      }
    </>
  );
};
export default Search;
