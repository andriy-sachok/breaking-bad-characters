import React from "react";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CharacterInfo = ({ photoURL, fullName, description }) => {
  return (
    <>
      <Card
        sx={{
          width: `70%`,
          margin: `2rem auto`,
          //   margin: `10rem`,
          borderRadius: `1rem`,
          backgroundColor: `whitesmoke`,
        }}
      >
        <CardMedia component="img" src={photoURL} />
        <CardContent>
          <Typography variant="h5" textAlign={`center`} fontWeight={`bold`}>
            {fullName}
          </Typography>
          <Typography variant="body1" textAlign={`start`}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CharacterInfo;
