import React from "react";

import { Container } from "@mui/material";

import Header from "./components/Header";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "lightblue",
      }}
    >
      <Header />
      <Gallery />
    </Container>
  );
}

export default App;
