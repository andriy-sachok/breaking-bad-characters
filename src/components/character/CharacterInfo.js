import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { characters } from "../../constants";
import { grey } from "@mui/material/colors";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled, Paper } from "@mui/material";
import { Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CharacterWrapper = styled(Paper)({
  borderRadius: `1.5rem`,
  width: `70%`,
  margin: `2rem auto`,
});

const iconButtonConfig = {
  color: grey[600],
  "&:hover": {
    color: grey[200],
  },
};
const iconArrowConfig = {
  // color: `white`,
  fontSize: 40,
};

const CharacterInfo = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  let { id } = useParams();
  const navigate = useNavigate();
  const character = characters.find((hero) => hero.id === id);

  const showPrevPhoto = () => {
    setPhotoIndex((index) => {
      --index;
      if (index < 0) {
        return character.photoURL.length - 1;
      }
      return index;
    });
  };

  const showNextPhoto = () => {
    setPhotoIndex((index) => {
      ++index;
      if (index === character.photoURL.length) {
        return 0;
      }
      return index;
    });
  };

  return (
    <CharacterWrapper elevation={8}>
      <Card
        sx={{
          background: `linear-gradient(to bottom right, ${grey[`A100`]}, ${
            grey[600]
          })`,
          borderRadius: `1.5rem`,
        }}
      >
        <CardMedia
          component="div"
          sx={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `space-between`,
            height: `700px`,
            backgroundImage: `url('${character.photoURL[photoIndex]}')`,
          }}
        >
          <IconButton onClick={showPrevPhoto} sx={iconButtonConfig}>
            <ArrowBackIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton onClick={showNextPhoto} sx={iconButtonConfig}>
            <ArrowForwardIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </CardMedia>

        <CardContent
          sx={{
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            justifyContent: "center",
          }}
        >
          <Typography variant={`h5`} textAlign={`center`} fontWeight={`bold`}>
            {character.fullName}
          </Typography>
          <Typography
            variant={`body1`}
            textAlign={`start`}
            sx={{ margin: `0.5rem 0` }}
          >
            {character.description}
          </Typography>
          <Button
            fullWidth={false}
            disableRipple
            variant={`text`}
            onClick={() => navigate("/")}
          >
            <Typography
              variant={`button`}
              textAlign={`center`}
              fontWeight={`bold`}
            >
              Go to characters list
            </Typography>
          </Button>
        </CardContent>
      </Card>
    </CharacterWrapper>
  );
};

export default CharacterInfo;
