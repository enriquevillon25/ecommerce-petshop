import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

interface CardCBasicInterface {
  name: string;
  image: string;
  price: number;
  quantity: number;
  onClick(): void;
}
export const CardCardComponent = ({
  name,
  image,
  price,
  quantity,
  onClick,
}: CardCBasicInterface) => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        height={100}
        sx={{ objectFit: "contain", width: "100px" }}
      />
      <Box
        sx={{
          display: { sx: "flex" },
          flexDirection: "row",
          width: "150px",
        }}
      >
        <CardContent>
          <Typography variant="h6" textAlign={"center"}>
            {name}
          </Typography>
          <Typography variant="body2" textAlign={"center"}>
            {quantity}
          </Typography>
          <Typography variant="body2" textAlign={"center"}>
            {`$ ${price} `}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
