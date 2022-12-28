import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar position="static">
      <Typography variant="h4" textAlign={"center"} margin="0.5rem">
        Breaking Bad characters
      </Typography>
    </AppBar>
  );
};
export default Header;
