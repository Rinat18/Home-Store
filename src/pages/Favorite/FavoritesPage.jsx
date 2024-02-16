import React, { useEffect } from "react";
import { UseFavorite } from "../../context/FavoritesContextProvider";
import "./favorites.scss";
import { AddShoppingCart } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useCart } from "../../context/CartContextProvider";

export default function FavoritesPage() {
  const { addProductToCart, checkProductInCart } = useCart();
  const { checkFavorite, deleteFavorite } = UseFavorite();

  const { favorites, readFavorite } = UseFavorite();
  useEffect(() => {
    readFavorite();
  }, []);
  console.log(favorites);

  return (
    <div className="cards-list">
      <div className="cards-list__container">
        {favorites && (
          <>
            {favorites.map((elem) => (
              <div className="card">
                <div className="card__imageBlock">
                  <img className="card__image" src={elem.image} alt="" />
                </div>
                <div className="card__title">{elem.title}</div>
                <div className="card__price">Price: {elem.price}$</div>
                <div className="card__admin"></div>
                <IconButton
                  // sx={{
                  //   backgroundColor: checkProductInCart(elem.id) ? "black" : "",
                  //   color: checkProductInCart(elem.id) ? "white" : "",
                  // }}
                  onClick={() => addProductToCart(elem)}
                >
                  <AddShoppingCart />
                </IconButton>
                <IconButton
                  // sx={{
                  //   backgroundColor: checkFavorite(elem.id) ? "black" : "",
                  //   color: checkFavorite(elem.id) ? "white" : "black"
                  // }}
                >
                  <StarOutlineIcon onClick={() => deleteFavorite(elem.id)} />
                </IconButton>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
