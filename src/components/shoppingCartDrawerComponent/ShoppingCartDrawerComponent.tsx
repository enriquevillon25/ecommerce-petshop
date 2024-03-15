import { Box, Drawer } from "@mui/material";
import React from "react";

export const ShoppingCartDrawerComponent = ({ open, onClose }: any) => {
  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      <Box sx={{ width: 250 }} role="presentation" onClick={() => {}}>
        Shopping Cart
      </Box>
    </Drawer>
  );
};
