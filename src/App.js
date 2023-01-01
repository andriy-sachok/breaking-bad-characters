import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Box, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { grey, blueGrey } from "@mui/material/colors";

import { AnimatePresence } from "framer-motion";
import AnimatedComponent from "./components/animations/AnimatedComponent";

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import CharacterInfo from "./components/character/CharacterInfo";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: blueGrey[100],
    },
    // backgroundColor: {
    //   header:
    // },
    // text: {},
  },
});

function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="false"
        disableGutters
        sx={{
          backgroundColor: `secondary.main`,
        }}
      >
        <Header />
        <Box
          sx={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
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
            </Routes>
          </AnimatePresence>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
