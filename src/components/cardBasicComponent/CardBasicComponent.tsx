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
  onClick(): void;
  inCart: number;
}
export const CardBasicComponent = ({
  name,
  image,
  price,
  onClick,
  inCart,
}: CardCBasicInterface) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={image}
        height={"200"}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="h4" textAlign={"center"}>
          {name}
        </Typography>
        <Typography variant="body2" textAlign={"center"}>
          {`${price}$`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={onClick}
          sx={{
            width: "100%",
            background: "#181D1C",
            borderColor: "#181D1C",
          }}
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
};
