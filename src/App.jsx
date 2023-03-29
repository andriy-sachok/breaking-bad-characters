import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { createTheme, ThemeProvider, Box, Container } from '@mui/material';
import { grey, blueGrey } from '@mui/material/colors';
import Header from './components/Header';
import Gallery from './components/Gallery';

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
              <Route path="/" exact element={<Navigate to="characters" />} />
              <Route path="/characters/*" element={<Gallery />} />
              <Route path="/*" element={<h1>Page 404</h1>} />
            </Routes>
          </AnimatePresence>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
