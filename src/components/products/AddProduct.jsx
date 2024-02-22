import React, { useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

export default function AddProduct({ closeModal, open }) {
  const { addProduct } = useProduct();
  const [product, setProduct] = useState({
    image: "",
    title: "",
    category: "",
    price: 0,
    comments: [],
    likes: [],
  });

  const inputsAdd = (e) => {
    console.log(e.target.value);
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
  };

  const handleAddProduct = () => {
    if (product.image == "" && product.title == "" && product.price == 0) {
      alert("заполни поле сучка");
    } else {
      addProduct(product);
      closeModal()
    }
  };
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={closeModal}
      sx={{
        position: "absolute",
        top: "20%",
      }}
    >
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
          ADD
        </Typography>
        <TextField
          onChange={inputsAdd}
          fullWidth
          name="title"
          label="Title"
          variant="outlined"
        />
        <TextField
          onChange={inputsAdd}
          fullWidth
          name="price"
          label="Price"
          variant="outlined"
        />
        <TextField
          onChange={inputsAdd}
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
    </Modal>
  );
}
