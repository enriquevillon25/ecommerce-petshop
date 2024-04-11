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

import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useCategorie } from "../../hooks/useCategorie";
import { CategorieInterface } from "../../interfaces/Categorie";
import { Search } from "@mui/icons-material";

export const Header = () => {
  const pages = [
    { title: "Products", url: "/products" },
    { title: "Nosotros", url: "/about" },
    { title: "Contáctanos", url: "/contact" },
    "Nosotros",
    "Contáctanos",
  ];
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const { categories } = useCategorie();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position="static" sx={{ background: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon
            sx={{
              display: { xs: "none", md: "flex", color: "#181D1C" },
              mr: 1,
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/", { replace: true });
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
            onClick={() => {
              navigate("/", { replace: true });
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
          <Search></Search>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              marginRight: "2%",
            }}
          >
            {pages.map((page: any) => (
              <>
                <Button
                  onClick={() => navigate(`${page.url}`, { replace: true })}
                  sx={{
                    my: 2,
                    color: "#181D1C",
                    display: "block",
                    fontWeight: 700,
                    fontFamily: "monospace",
                  }}
                >
                  {page.title}
                </Button>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {categories?.map((categorie: CategorieInterface) => (
                    <MenuItem onClick={handleClose}>{categorie.name}</MenuItem>
                  ))}
                </Menu>
              </>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", gap: 24 } }}>
            <Tooltip title={`View Cart`}>
              <IconButton
                onClick={() => {
                  navigate("/shopping-cart", { replace: true });
                }}
                sx={{ p: 0 }}
              >
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
