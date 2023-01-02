import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { createTheme, ThemeProvider, Box, Container } from "@mui/material";
import { grey, blueGrey } from "@mui/material/colors";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import AnimatedComponent from "./components/animations/AnimatedComponent";
import CharacterInfo from "./components/character/CharacterInfo";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: blueGrey[100],
    },
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
          height: `100%`,
        }}
      >
        <Header />
        <Box
          sx={{
            display: `flex`,
            height: `100%`,
            justifyContent: `center`,
            alignItems: `center`,
            padding: `1.5rem`,
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
////
///
//

export default App;
