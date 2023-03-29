import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import {
  Paper,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { characters } from '../../constants';

const iconButtonConfig = {
  color: grey[600],
  '&:hover': {
    color: grey[200],
  },
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
    <Paper
      elevation={8}
      sx={{
        borderRadius: `1.5rem`,
        margin: `2rem`,
        width: {
          xs: `350px`,
          sm: `550px`,
          md: `850px`,
          lg: `1100px`,
          // xl: `1300px`,
        },
      }}
    >
      <Card
        sx={{
          width: `inherit`,
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
            height: {
              xs: `250px`,
              sm: `400px`,
              md: `600px`,
              lg: `800px`,
              // xl: `1200px`,
            },
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
            justifyContent: 'center',
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
            onClick={() => navigate(-1)}
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
    </Paper>
  );
};

export default CharacterInfo;
