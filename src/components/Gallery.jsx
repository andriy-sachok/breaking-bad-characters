import React from 'react';
import { motion } from 'framer-motion';
import CharacterCard from './character/CharacterCard';
import { characters } from '../constants';
import { galleryAnimation, galleyrItemAnimation } from '../animations';

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
        variants={galleryAnimation}
        initial="hidden"
        animate="visible"
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `center`,
        }}
      >
        {charactersList.map((hero) => (
          <motion.div variants={galleyrItemAnimation} key={hero.fullName}>
            <CharacterCard
              id={hero.id}
              photoURL={hero.photoURL}
              name={hero.name}
              fullName={hero.fullName}
              description={hero.description}
            ></CharacterCard>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Gallery;
