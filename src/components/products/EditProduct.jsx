import React, { useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useProduct } from "../../context/ProductContextProvider";

export default function EditProduct({ open2, closeModal2, elem }) {
    const {editProduct} = useProduct()
  const [product, setProduct] = useState({ ...elem });
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
    editProduct(elem.id, product)
    closeModal2()
  }

  return (
    <Modal
      open={open2}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={closeModal2}
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
            onChange={addObj}
          value={product.price}

          fullWidth
          name="price"
          label="Price"
          variant="outlined"
        />
        <TextField
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
    </Modal>
  );
}
