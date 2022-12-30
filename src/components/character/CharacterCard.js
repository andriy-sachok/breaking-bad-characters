import * as React from "react";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CharacterCard = (props) => {
  const navigate = useNavigate();
  const id = props.id;
  const photo = props.photo;
  const name = props.name;

  return (
    <Card
      onClick={() => {
        navigate(`/${id}`);
      }}
      sx={{
        flex: `0 0 calc(16.66% - 20px)`,
        margin: `2rem`,
        borderRadius: `1rem`,
        backgroundColor: `whitesmoke`,
        background: `linear-gradient(to bottom right, #ffffff, #808080)`,
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
  );
};

export default CharacterCard;
