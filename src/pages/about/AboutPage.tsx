import { Typography } from "@mui/material";
import React from "react";

export const AboutPage = () => {
  return (
    <div style={{ background: "red" }}>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "#181D1C",
          textDecoration: "none",
        }}
      >
        DOG
      </Typography>
    </div>
  );
};
