import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { Button } from "@mui/material";
import AddProduct from "./AddProduct";

export default function CardsList() {
  const { readProducts, products } = useProduct();
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  useEffect(() => {
    readProducts();
  }, []);
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
                  <div className="card__price">{elem.price}</div>
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
