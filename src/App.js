import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Container } from "@mui/material";

import { AnimatePresence } from "framer-motion";
import AnimatedComponent from "./components/animations/AnimatedComponent";

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
          <Route path={"/"} exact element={<Gallery />} />
          <Route
            path={"/:id"}
            element={
              <AnimatedComponent>
                <CharacterInfo />
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
