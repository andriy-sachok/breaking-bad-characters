import React from "react";

import Character from "./Character";

import { characters } from "../constants";

const Gallery = () => {
  return (
    <>
      {characters.map((hero) => {
        let character = {
          photo: hero.photoURL,
          name: hero.name,
          fullName: hero.fullName,
          description: hero.description,
        };
        return <Character key={hero.fullName} info={character} />;
      })}
    </>
  );
};

export default Gallery;
