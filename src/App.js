import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Container } from "@mui/material";

import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import DummyComponent from "./components/animations/DummyComponent";

function App() {
  const location = useLocation();
  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        backgroundImage: `url(https://img.freepik.com/free-photo/green-smoke-spread-black-background_23-2148092735.jpg?w=2000)`,
        backgroundRepeat: `no-repeat`,
        // backgroundAttachment: `fixed`,
        backgroundSize: `100% 100%`,
      }}
    >
      <Header />
      <AnimatePresence mode={`wait`}>
        <Routes key={location.pathname} location={location}>
          <Route path={"/*"} element={<Gallery />} />
          <Route path="/dummy" element={<DummyComponent />} />
        </Routes>
      </AnimatePresence>
      {/* <Gallery /> */}
    </Container>
  );
}

export default App;
