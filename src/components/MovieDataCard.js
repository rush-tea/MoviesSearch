import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Chip from '@mui/material/Chip';
import Stack from "@mui/material/Stack";
import Rating from '@mui/material/Rating';
import { red } from "@mui/material/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MovieDataCard({ open, handleClose, movieData }) {
  const getGenreChips = () => {
    const genresArray = movieData.Genre ? movieData.Genre.split(",").map(genre => genre.trim()) : [];
    return genresArray.length > 0 ? genresArray.map((genre, idx) => (
      <Chip label={genre} key={idx}/>
    )) : <></>
  }
  return (
    <div>
      {movieData && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Card sx={{ maxWidth: 400 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                title={movieData.Title}
                subheader={movieData.Released}
              />
              <CardMedia
                component="img"
                height="200"
                image={movieData.Poster}
                alt="Movie Poster"
              />
              <CardContent>
                <Box>
                  <Stack>
                    <Rating defaultValue={parseFloat(movieData.Ratings[0].Value)/10} precision={0.1} readOnly/>
                  </Stack>
                  <Stack spacing={1} direction={"row-reverse"} >
                    {getGenreChips()}
                  </Stack>
                </Box>
                <Box>
                  <Typography variant="subtitle1">Plot </Typography>
                  <Typography variant="body2" color="text.secondary">
                     {movieData.Plot}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2">Written By </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {movieData.Writer}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2">Directed By </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {movieData.Director}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2">Actors </Typography>
                  <Typography variant="body2"> {movieData.Actors} </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Modal>
      )}
    </div>
  );
}
