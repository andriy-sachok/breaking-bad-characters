import React from "react";
import { useParams } from "react-router-dom";
import { characters } from "../../constants";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CharacterInfo = () => {
  let { id } = useParams();
  const character = characters.find((hero) => hero.id === id);

  return (
    <>
      <Card
        sx={{
          width: `70%`,
          margin: `2rem auto`,
          borderRadius: `1rem`,
          backgroundColor: `whitesmoke`,
        }}
      >
        <CardMedia component="img" src={character.photoURL} />
        <CardContent>
          <Typography variant="h5" textAlign={`center`} fontWeight={`bold`}>
            {character.fullName}
          </Typography>
          <Typography variant="body1" textAlign={`start`}>
            {character.description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CharacterInfo;
