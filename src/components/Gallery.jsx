import React from 'react';
import { motion } from 'framer-motion';
import CharacterCard from './character/CharacterCard';
import { characters } from '../constants';
import {
  galleryAnimation,
  galleyrItemAnimation,
  characterInfoAnimation,
} from '../animations';
import { Routes, Route } from 'react-router-dom';
import CharacterInfo from './character/CharacterInfo';

const Gallery = () => {
  const charactersList = characters.map((hero) => ({
    id: hero.id,
    photoURL: hero.photoURL,
    name: hero.name,
    fullName: hero.fullName,
    description: hero.description,
  }));

  const GalleryRoute = () => {
    return (
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
            />
          </motion.div>
        ))}
      </motion.div>
    );
  };

  const CharacterInfoRoute = () => {
    return (
      <motion.div
        variants={characterInfoAnimation}
        initial={`initial`}
        animate={`animate`}
        exit={`exit`}
        transition={{ duration: 0.5 }}
      >
        <CharacterInfo />
      </motion.div>
    );
  };
  return (
    <Routes>
      <Route path="/" exact element={<GalleryRoute />} />
      <Route path="/:id" element={<CharacterInfoRoute />} />
    </Routes>
  );
};

export default Gallery;
