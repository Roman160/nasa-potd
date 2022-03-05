import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';


export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <>
      <Grid container spacing={0}>
      <Grid xs={12} justify="space-between" align="center">
      <Box>
      {photoData.media_type === "image" ? (
        <img
          src={photoData.url}
          alt={photoData.title}
          className="photo"
          width="100%" 
          height="auto"
          maxWidth="400px"
        />
      ) : (
        <iframe
          title="space-video"
          src={photoData.url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className="photo"
          width="100%" 
          height="auto"

        />
      )}
      </Box>
      </Grid>
    <Grid item xs={12}>
        <Box>
        <Typography variant="h4" component="div" align="center">
        {photoData.date}  
      </Typography>
        <Typography variant="h4" component="div" align="center">
        {photoData.title}
      </Typography>
      <Typography variant="h5" component="div" align="center">
        {photoData.explanation}
      </Typography>
      </Box>
      </Grid>
    </Grid>
    </>
  );
}