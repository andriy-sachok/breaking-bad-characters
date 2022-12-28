import * as React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Character = (props) => {
  const photo = props.info.photo;
  const name = props.info.name;
  return (
    <Card>
      <CardMedia component="img" src={photo} alt={name} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Character;
