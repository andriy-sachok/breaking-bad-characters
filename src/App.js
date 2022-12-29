import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Container } from "@mui/material";

import { AnimatePresence } from "framer-motion";
import AnimatedComponent from "./components/animations/AnimatedComponent";

import { characters } from "./constants";

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import CharacterInfo from "./components/character/CharacterInfo";
import DummyComponent from "./components/animations/DummyComponent";

function App() {
  const location = useLocation();
  return (
    <Container maxWidth="false" disableGutters>
      <Header />
      <AnimatePresence mode={`wait`}>
        <Routes key={location.pathname} location={location}>
          <Route path={"/"} element={<Gallery />} />
          <Route
            path={"walter-white"}
            element={
              <AnimatedComponent>
                <CharacterInfo
                  photoURL={characters[0].photoURL}
                  fullName={characters[0].fullName}
                  description={characters[0].description}
                />
              </AnimatedComponent>
            }
          />
          <Route path="dummy" element={<DummyComponent />} />
        </Routes>
      </AnimatePresence>
      {/* <Gallery /> */}
    </Container>
  );
}

export default App;
