import React from "react";
import { motion } from "framer-motion";

import Grid from "@mui/material/Grid";

import CharacterCard from "./character/CharacterCard";

import { characters } from "../constants";

const gallery = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const galleyrItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const Gallery = () => {
  const charactersList = characters.map((hero) => ({
    id: hero.id,
    photoURL: hero.photoURL,
    name: hero.name,
    fullName: hero.fullName,
    description: hero.description,
  }));

  return (
    <>
      <motion.div
        variants={gallery}
        initial="hidden"
        animate="visible"
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `center`,
        }}
      >
        {charactersList.map((hero) => (
          <motion.div variants={galleyrItem} key={hero.fullName}>
            <Grid item md={5}>
              <CharacterCard
                id={hero.id}
                photo={hero.photoURL}
                name={hero.name}
                fullName={hero.fullName}
                description={hero.description}
              ></CharacterCard>
            </Grid>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Gallery;
