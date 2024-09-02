"use client";

import {
  Stack,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
} from "@mui/material";
import React from "react";
import ItemCart from "./item-cart";

export default function Home() {
  const [items, setItems] = React.useState([
    { itemname: "iPhone 15", price: 399, quantity: 0, image: "/images/iphone15.jpg" },
    { itemname: "iPhone 15 Pro", price: 499, quantity: 0, image: "/images/iphone15pro.jpg" },
    { itemname: "iPhone 15 Pro Max", price: 699, quantity: 0, image: "/images/iphone15promax.jpg" },
    { itemname: "iPhone 15 Pro Plus Ultra", price: 799, quantity: 0, image: "/images/iphone15proplusultra.jpg" },
    { itemname: "iPad Pro", price: 799, quantity: 0, image: "/images/ipadpro.jpg" },
    { itemname: "iPad Air", price: 599, quantity: 0, image: "/images/ipadair.jpg" },
    { itemname: "iPad", price: 329, quantity: 0, image: "/images/ipad.jpg" },
    { itemname: "iPad mini", price: 499, quantity: 0, image: "/images/ipadmini.jpg" },
    { itemname: "MacBook Air", price: 1199, quantity: 0, image: "/images/macbookair.jpg" },
    { itemname: "MacBook Pro", price: 1299, quantity: 0, image: "/images/macbookpro.jpg" },
    { itemname: "iMac", price: 1499, quantity: 0, image: "/images/imac.jpg" },
    { itemname: "Mac mini", price: 699, quantity: 0, image: "/images/macmini.jpg" },
    { itemname: "Mac Studio", price: 1999, quantity: 0, image: "/images/macstudio.jpg" },
  ]);

  const handleQuantityChange = (itemname: string, quantity: number) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.itemname === itemname
          ? { ...item, quantity }
          : item
      )
    );
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ margin: '2rem 0', color: '#333', backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '8px' }}>
        Shopping Cart
      </Typography>
      <Card sx={{ maxWidth: '100%', margin: '0 auto', padding: 2, backgroundColor: '#fafafa', boxShadow: 3 }}>
        <CardContent>
          <Grid container spacing={2}>
            {items.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.itemname}>
                <ItemCart
                  itemname={item.itemname}
                  itemPrice={item.price}
                  quantity={item.quantity}
                  image={item.image}
                  onQuantityChange={(quantity) => handleQuantityChange(item.itemname, quantity)}
                />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
      <Stack direction="row" spacing={2} sx={{ padding: "1rem", justifyContent: "center", backgroundColor: '#e0e0e0', borderRadius: '8px', boxShadow: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#444' }}>Total Price:</Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#d32f2f' }}>{totalPrice.toLocaleString()} Thb</Typography>
      </Stack>
    </main>
  );
}
