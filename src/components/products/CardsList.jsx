import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { Button, colors } from "@mui/material";
import AddProduct from "./AddProduct";
import "./product.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditProduct from "./EditProduct";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { UseFavorite } from "../../context/FavoritesContextProvider";

export default function CardsList() {
  const { readProducts, products, deleteProduct } = useProduct();
  const {addFavorite, checkFavorite} = UseFavorite()
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const openModal2 = () => {
    setOpen2(true);
  };
  const closeModal2 = () => {
    setOpen2(false);
  };
  useEffect(() => {
    readProducts();
  }, []);

  console.log(checkFavorite());
  return (
    <>
      <Button onClick={openModal}>Add Product</Button>
      <div className="cards-list">
        <div className="cards-list__container">
          {products && (
            <>
              {products.map((elem) => (
                <div className="card">
                  <div className="card__imageBlock">
                    <img className="card__image" src={elem.image} alt="" />
                  </div>
                  <div className="card__title">{elem.title}</div>
                  <div className="card__price">Price: {elem.price}$</div>
                  <div className="card__admin">
                    <EditIcon onClick={openModal2} />
                    <DeleteIcon onClick={() => deleteProduct(elem.id)} />
                    <StarOutlineIcon 
                      sx={{
                        backgroundColor: checkFavorite(elem.id) ? "black" : "white",
                        color: checkFavorite(elem.id) ? "white" : "black",
                        borderRadius: "20px"
                      }}
                    onClick={() => addFavorite(elem)} />
                    <FavoriteBorderIcon />
                  </div>
                  <EditProduct open2={open2} elem={elem} closeModal2={closeModal2} />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <AddProduct open={open} closeModal={closeModal} />
    </>
  );
}
