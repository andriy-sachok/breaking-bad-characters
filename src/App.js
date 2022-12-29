import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Container } from "@mui/material";

import { AnimatePresence } from "framer-motion";

import { characters } from "./constants";

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import CharacterInfo from "./components/character/CharacterInfo";
import DummyComponent from "./components/animations/DummyComponent";

function App() {
  const location = useLocation();
  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={
        {
          // backgroundImage: `url(https://img.freepik.com/free-photo/green-smoke-spread-black-background_23-2148092735.jpg?w=2000)`,
          // backgroundRepeat: `no-repeat`,
          // backgroundAttachment: `fixed`,
          // backgroundSize: `100% 100%`,
        }
      }
    >
      <Header />
      <AnimatePresence mode={`wait`}>
        <Routes key={location.pathname} location={location}>
          <Route path={"/*"} element={<Gallery />} />
          <Route
            path={"/walter-white"}
            element={
              <CharacterInfo
                photoURL={characters[0].photoURL}
                fullName={characters[0].fullName}
                description={characters[0].description}
              />
            }
          />
          <Route path="/dummy" element={<DummyComponent />} />
        </Routes>
      </AnimatePresence>
      {/* <Gallery /> */}
    </Container>
  );
}

export default App;
