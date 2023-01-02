import * as React from "react";
import { AppBar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: `primary.main` }}>
      <Typography variant="h4" textAlign="center" margin="0.5rem">
        Breaking Bad characters
      </Typography>
    </AppBar>
  );
};
export default Header;
