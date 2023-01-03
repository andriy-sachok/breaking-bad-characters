import React from "react";

import { styled, Paper } from "@mui/material";

const Wrapper = styled(Paper)({
  borderRadius: `1.5rem`,
  margin: `2rem`,
});

const CustomPaper = ({ children }) => {
  return <Wrapper elevation={4}>{children}</Wrapper>;
};

export default CustomPaper;
