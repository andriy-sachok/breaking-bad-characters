import React from "react";
import { useParams } from "react-router-dom";
import { characters } from "../../constants";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled, Paper } from "@mui/material";

const CharacterWrapper = styled(Paper)({
  borderRadius: `1.5rem`,
  width: `70%`,
  margin: `2rem auto`,
});

const CharacterInfo = () => {
  let { id } = useParams();
  const character = characters.find((hero) => hero.id === id);

  return (
    <CharacterWrapper elevation={8}>
      <Card
        sx={{
          background: `linear-gradient(to bottom right, #ffffff, #a6a6a6)`,
          borderRadius: `1.5rem`,
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
    </CharacterWrapper>
  );
};

export default CharacterInfo;
