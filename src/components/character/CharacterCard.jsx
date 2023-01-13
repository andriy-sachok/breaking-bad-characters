import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { grey } from '@mui/material/colors';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  styled,
  Paper,
} from '@mui/material';

const scaleAnimtaion = {
  hover: { scale: 1.05 },
  exit: { scale: 1 },
};

const scaleAndRollAnimation = {
  disappearing: {
    scale: 0,
    rotate: '45deg',
  },
};

const CardWrapper = styled(Paper)({
  borderRadius: `1rem`,
  margin: `1rem`,
  cursor: `pointer`,
});

const CharacterCard = ({ id, photoURL, name }) => {
  const [isShow, setIsShow] = useState(true);
  const navigate = useNavigate();

  return (
    <motion.div
      variants={scaleAndRollAnimation}
      animate={isShow ? `` : `disappearing`}
      transition={{ duration: 0.3 }}
    >
      <CardWrapper elevation={4}>
        <motion.div
          variants={scaleAnimtaion}
          whileHover={`hover`}
          exit={`exit`}
          transition={{ duration: 0.3 }}
        >
          <Card
            onClick={() => {
              navigate(`/${id}`);
              setIsShow((prevState) => !prevState);
            }}
            sx={{
              background: `linear-gradient(to bottom right, ${grey[`A100`]}, ${
                grey[600]
              })`,
              borderRadius: `1rem`,
            }}
          >
            <CardMedia
              component="img"
              src={photoURL[0]}
              alt={name}
              sx={{ width: '350px', height: `260px` }}
            />
            <CardContent>
              <Typography variant="h5" textAlign={`center`} fontWeight={`bold`}>
                {name}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </CardWrapper>
    </motion.div>
  );
};

export default CharacterCard;
