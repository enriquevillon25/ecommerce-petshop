import {
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
  onClick(): void;
}
export const CardBasicComponent = ({
  name,
  image,
  onClick,
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
        <Typography variant="h4">{name}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={onClick} sx={{ width: "100%" }}>
          Add
        </Button>
      </CardActions>
    </Card>
  );
};
