import React, { useEffect } from "react";
import { UseFavorite } from "../../context/FavoritesContextProvider";
import "./favorites.scss";

export default function FavoritesPage() {
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
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
