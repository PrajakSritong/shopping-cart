import {
    Button,
    Stack,
    Typography,
    Card,
    CardMedia,
  } from "@mui/material";
  import React from "react";
  
  interface ItemCartProps {
    itemname: string;
    itemPrice: number;
    quantity: number;
    image: string;
    onQuantityChange: (quantity: number) => void;
  }
  
  const ItemCart: React.FC<ItemCartProps> = ({ itemname, itemPrice, quantity, image, onQuantityChange }) => {
    const increment = () => {
      onQuantityChange(quantity + 1);
    };
  
    const decrement = () => {
      if (quantity > 0) {
        onQuantityChange(quantity - 1);
      }
    };
  
    return (
      <Stack direction="row" spacing={2} alignItems="center" sx={{ marginBottom: "1rem" }}>
        <CardMedia
          component="img"
          sx={{ width: 100, height: 100, objectFit: "cover" }}
          image={image}
          alt={itemname}
        />
        <Stack spacing={1}>
          <Typography variant="h6">{itemname}</Typography>
          <Typography variant="body1">{itemPrice.toLocaleString()} Thb</Typography>
          <Typography variant="body1">x {quantity}</Typography>
          <Stack direction="row" spacing={1}>
            <Button onClick={decrement} variant="outlined">-</Button>
            <Button onClick={increment} variant="outlined">+</Button>
          </Stack>
          <Typography variant="body1">Total: {(itemPrice * quantity).toLocaleString()} Thb</Typography>
        </Stack>
      </Stack>
    );
  };
  
  export default ItemCart;
  