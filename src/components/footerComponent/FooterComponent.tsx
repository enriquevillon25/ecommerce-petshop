import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YoutubeIcon from "@mui/icons-material/YouTube";
import React from "react";

export const FooterComponent = () => {
  return (
    <Box
      sx={{
        background: "#2E3534",
        display: "flex",
        gap: 2,
        padding: 4,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Typography
        variant="h4"
        color={"white"}
        sx={{
          letterSpacing: ".1rem",
          textDecoration: "none",
          fontFamily: "monospace",
        }}
      >
        Mascota Locura
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
        }}
      >
        <FacebookIcon sx={{ color: "white" }} />
        <WhatsappIcon sx={{ color: "white" }} />
        <InstagramIcon sx={{ color: "white" }} />
        <YoutubeIcon sx={{ color: "white" }} />
      </Box>
    </Box>
  );
};
