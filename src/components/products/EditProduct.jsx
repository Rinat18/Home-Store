import React, { useEffect, useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useProduct } from "../../context/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  const { editProduct, oneProduct, getOneProduct } = useProduct();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState("");

  function addObj(e) {
    if (e.target.name === "price") {
      const obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      const obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  }

  const handleAddProduct = () => {
    editProduct(id, product);
    navigate("/");
  };

  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);
  return (
    <Box
      sx={{
        padding: 1,
        borderRadius: 3,

        width: "50vw",
        height: "70%",
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "white",
      }}
    >
      <Typography variant="h4" align="center">
        EDIT
      </Typography>
      <TextField
        onChange={addObj}
        value={product.title}
        fullWidth
        name="title"
        label="Title"
        variant="outlined"
      />
      <TextField
        sx={{ mt: 2, mb: 2 }}
        onChange={addObj}
        value={product.price}
        fullWidth
        name="price"
        label="Price"
        variant="outlined"
      />
      <TextField
        sx={{ mb: 2 }}
        onChange={addObj}
        value={product.image}
        fullWidth
        name="image"
        label="Image URL"
        variant="outlined"
      />
      <Button
        onClick={handleAddProduct}
        sx={{ marginBottom: 1 }}
        variant="outlined"
      >
        ADD
      </Button>
    </Box>
  );
}
