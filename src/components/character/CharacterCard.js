import * as React from "react";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { styled, Paper } from "@mui/material";

const CardWrapper = styled(Paper)({
  borderRadius: `1rem`,
  margin: `2rem`,
});

const scaleAnimtaion = {
  hover: { scale: 1.05 },
  exit: { scale: 1 },
};

const CharacterCard = ({ id, photo, name }) => {
  const navigate = useNavigate();

  return (
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
      </motion.div>
    </CardWrapper>
  );
};

export default CharacterCard;
