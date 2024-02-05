import { React, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "./MovieList.css";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/list.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="main">
      <h1>Search A Movie</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <p>You searched for...</p>
      <Grid container spacing={3} style={{margin:'10px', padding:'2px'}}>
        {search &&
          filteredMovies.map((movie) => (
            <Grid item xs={15} sm={10} md={4} lg={3} key={movie.movieId}>
              <Card onClick={() => alert(movie.movieId)} style={{height:'150px', width:'250px', padding:'5px'}}>
                <CardContent>
                  <Typography variant="h6">{movie.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default MovieList;

