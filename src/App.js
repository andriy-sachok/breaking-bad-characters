import React from "react";

import { Container } from "@mui/material";

import Header from "./components/Header";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{ backgroundColor: `lightblue` }}
    >
      <Header />
      <Gallery />
    </Container>
  );
}

export default App;
