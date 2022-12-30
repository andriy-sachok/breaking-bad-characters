import * as React from "react";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { styled, Paper } from "@mui/material";

const CardWrapper = styled(Paper)({
  borderRadius: `1rem`,
  margin: `2rem`,
});

const CharacterCard = ({ id, photo, name }) => {
  const navigate = useNavigate();

  return (
    <CardWrapper elevation={4}>
      <Card
        onClick={() => {
          navigate(`/${id}`);
        }}
        sx={{
          background: `linear-gradient(to bottom right, #ffffff, #808080)`,
          borderRadius: `1rem`,
        }}
      >
        <CardMedia
          component="img"
          src={photo}
          alt={name}
          sx={{ width: "350px", height: `260px` }}
        />
        <CardContent>
          <Typography variant="h5" textAlign={`center`}>
            {name}
          </Typography>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

export default CharacterCard;
