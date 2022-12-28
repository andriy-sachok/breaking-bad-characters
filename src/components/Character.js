import * as React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Character = (props) => {
  const photo = props.photo;
  const name = props.name;
  return (
    <Card
      sx={{
        flex: `0 0 calc(16.66% - 20px)`,
        margin: `2rem`,
      }}
    >
      <CardMedia
        component="img"
        src={photo}
        alt={name}
        sx={{ width: "350px" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Character;
