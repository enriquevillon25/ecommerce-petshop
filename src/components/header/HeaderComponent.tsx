import React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

import MenuIcon from "@mui/icons-material/Menu";

export const HeaderComponent = () => {
  const pages = ["About", "Products"];
  return (
    <AppBar position="static" sx={{ background: "WHITE" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon
            sx={{
              display: { xs: "none", md: "flex", color: "#181D1C" },
              mr: 1,
            }}
          />
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

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", background: "red" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => {}}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => console.log("page")}
                sx={{
                  my: 2,
                  color: "#181D1C",
                  display: "block",
                  fontWeight: 700,
                  fontFamily: "monospace",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", gap: 24 } }}>
            <Tooltip title={`See Cart`}>
              <IconButton onClick={() => {}} sx={{ p: 0 }}>
                <ShoppingCart />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open Profile">
              <IconButton onClick={() => {}} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
