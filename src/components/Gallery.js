import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Character from "./Character";

import { characters } from "../constants";

const Gallery = () => {
  const charactersList = characters.map((hero) => ({
    photoURL: hero.photoURL,
    name: hero.name,
    fullName: hero.fullName,
    description: hero.description,
  }));

  const result = charactersList.map((hero) => {
    return (
      <Grid item md={5} key={hero.fullName}>
        <Character
          photo={hero.photoURL}
          name={hero.name}
          fullName={hero.fullName}
          description={hero.description}
        />
      </Grid>
    );
  });

  return (
    <>
      <Box
        sx={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `center`,
        }}
      >
        {result}
      </Box>
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={10}
          columns={15}
          sx={{ padding: `5rem` }}
          wrap={`wrap`}
        ></Grid>
      </Box> */}
    </>
  );
};

export default Gallery;
