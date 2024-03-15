import { Box, Drawer, Typography } from "@mui/material";
import React from "react";

export const ShoppingCartDrawerComponent = ({
  open,
  onClose,
  productsCart,
}: any) => {
  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      <Box sx={{ width: 250 }} role="presentation" onClick={() => {}}>
        <Typography variant="h5" textAlign={"center"}>
          Shopping Cart
        </Typography>
        {productsCart &&
          productsCart.map((product: any) => (
            <Typography variant="h6">{product.name}</Typography>
          ))}
      </Box>
    </Drawer>
  );
};
