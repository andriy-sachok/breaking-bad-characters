import * as React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { grey } from "@mui/material/colors";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  styled,
  Paper,
} from "@mui/material";

const CardWrapper = styled(Paper)({
  borderRadius: `1rem`,
  margin: `1rem`,
});

const scaleAnimtaion = {
  hover: { scale: 1.05 },
  exit: { scale: 1 },
};

const CharacterCard = ({ id, photoURL, name }) => {
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
            sx={{ width: "350px", height: `260px` }}
          />
          <CardContent>
            <Typography variant="h5" textAlign={`center`} fontWeight={`bold`}>
              {name}
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </CardWrapper>
  );
};

export default CharacterCard;
