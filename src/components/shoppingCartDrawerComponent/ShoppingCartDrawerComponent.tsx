import { Box, Drawer, Typography } from "@mui/material";
import React from "react";
import { ProductCartInterface } from "../../interfaces/ProductCart";
import { CardCardComponent } from "../cardCartComponent/CardCartComponent";

export const ShoppingCartDrawerComponent = ({
  open,
  onClose,
  productsCart,
  totalPrice,
}: any) => {
  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      <Typography
        variant="h5"
        textAlign={"center"}
        sx={{ marginBottom: "20px" }}
      >
        Shopping Cart
      </Typography>
      <Box
        sx={{
          width: 400,
          margin: "10px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
        role="presentation"
        onClick={() => {}}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {productsCart &&
            productsCart.map((product: ProductCartInterface) => (
              <CardCardComponent
                name={product.name}
                image={product.image}
                price={product.price}
                quantity={product.quantity}
                onClick={() => {}}
                key={product.id}
              />
            ))}
        </Box>
        <Typography
          variant="h5"
          textAlign={"center"}
          sx={{ marginBottom: "20px" }}
        >
          {totalPrice}
        </Typography>
      </Box>
    </Drawer>
  );
};

// <Box
//   sx={{
//     display: { xs: "flex" },
//     justifyContent: "space-between",
//     alignItems: "center",
//   }}
// >
//   <Typography key={product.id} variant="h6">
//     {product.name}
//   </Typography>
//   <Typography key={product.id} variant="h6">
//     {product.quantity}
//   </Typography>
// </Box>
