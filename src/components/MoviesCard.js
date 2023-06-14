import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import MovieDataCard from "./MovieDataCard";

export default function MoviesCard({ movie }) {
  // console.log(movie);
  const [movieData, setMovieData] = useState({});
  const [openMovieData, setOpenMovieData] = useState(false); 

  const handleOpenMovieData = async () => {
    setOpenMovieData(true);
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=8b8450ed&i=${movie.imdbID}`
    );
    console.log(response);
    setMovieData(response.data);
  };

  const handleCloseMovieData = () => {
    setOpenMovieData(false);
  }

  return (
    <React.Fragment>
      <Card sx={{ width: "300px", maxHeight: "300px" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={movie.Poster}
          title={movie.Title}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle" component="div">
            {movie.Title}
          </Typography>
          <Button onClick={handleOpenMovieData}> Open Movie Details </Button>
        </CardContent>
      </Card>
      {(openMovieData && movieData) && <MovieDataCard open={openMovieData} handleClose={handleCloseMovieData} movieData={movieData}/>}
    </React.Fragment>
  );
}
