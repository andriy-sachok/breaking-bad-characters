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
        backgroundImage: `url(https://img.freepik.com/free-photo/green-smoke-spread-black-background_23-2148092735.jpg?w=2000)`,
        backgroundRepeat: `no-repeat`,
        // backgroundAttachment: `fixed`,
        backgroundSize: `100% 100%`,
      }}
    >
      <Header />
      <Gallery />
    </Container>
  );
}

export default App;
