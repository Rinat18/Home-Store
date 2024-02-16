import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { Button, IconButton } from "@mui/material";
import AddProduct from "./AddProduct";
import "./product.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditProduct from "./EditProduct";
import { Pagination, Stack, Typography } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AddShoppingCart } from "@mui/icons-material";
import { useCart } from "../../context/CartContextProvider";
import { UseFavorite } from "../../context/FavoritesContextProvider";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAuth } from "../../context/AuthContextPrvider";
import { ADMIN } from "../../consts/const";

export default function CardsList() {
  const { readProducts, products, deleteProduct, addLikes } = useProduct();
  const { addFavorite, checkFavorite } = UseFavorite();
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { addProductToCart, checkProductInCart } = useCart();
  const { user } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    setPage(1);
    readProducts();
  }, [searchParams]);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const [page, setPage] = useState(1);
  const itemPerPage = 3;
  const count = Math.ceil(products.length / itemPerPage);
  const currentData = () => {
    const begin = (page - 1) * itemPerPage;
    const end = begin + itemPerPage;
    return products.slice(begin, end);
  };
  const handleChange = (e, value) => {
    setPage(value);
  };
  const [search, setSearch] = useState(searchParams.get("q") || "");
  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  const obj = { user: user.email };
  const addLike = (id) => {
    addLikes(id, obj);
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          className="search__input"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="cards-list">
        {user.email == ADMIN ? (
          <Button variant="contained" sx={{ mb: 2 }} onClick={openModal}>
          Add Product
        </Button>
        ):(
          <></>
        )}
        <div className="cards-list__container">
          {currentData().map((elem) => (
            <div key={elem.id} className="card">
              <div
                onClick={() => navigate(`/detail/${elem.id}`)}
                className="card__imageBlock"
              >
                <img className="card__image" src={elem.image} alt="" />
              </div>
              <div className="card__title">{elem.title}</div>
              <div className="card__price">Price: {elem.price}$</div>
              {user.email == ADMIN ? (
                <>
                  <div className="card__admin">
                    <EditIcon
                      onClick={() => navigate(`editProduct/${elem.id}`)}
                    />
                    <DeleteIcon onClick={() => deleteProduct(elem.id)} />
                  </div>
                  <IconButton
                    sx={{
                      backgroundColor: checkProductInCart(elem.id)
                        ? "black"
                        : "",
                      color: checkProductInCart(elem.id) ? "white" : "",
                    }}
                    onClick={() => addProductToCart(elem)}
                  >
                    <AddShoppingCart />
                  </IconButton>
                  <IconButton
                    sx={{
                      backgroundColor: checkFavorite(elem.id).then((res) => {
                        const test = res
                        return test
                      })
                        ? "white"
                        : "black",
                      color: checkFavorite(elem.id).then((res) => {
                        return res;
                      })
                        ? "black"
                        : "white",
                    }}
                    onClick={() => addFavorite(elem)}
                  >
                    <StarOutlineIcon />
                  </IconButton>
                  <IconButton
                    // sx={{
                    //   backgroundColor: addLike(elem.id) ? "white" : "",
                    //   color: addLike(elem.id) ? "black" : "",
                    // }}
                    onClick={() => addLike(elem.id)}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                </>
              ) : (
                <>
                  <IconButton
                    sx={{
                      backgroundColor: checkProductInCart(elem.id)
                        ? "black"
                        : "",
                      color: checkProductInCart(elem.id) ? "white" : "",
                    }}
                    onClick={() => addProductToCart(elem)}
                  >
                    <AddShoppingCart />
                  </IconButton>
                  <IconButton
                    sx={{
                      backgroundColor: checkFavorite(elem.id).then((res) => {
                        return res;
                      })
                        ? "white"
                        : "black",
                      color: checkFavorite(elem.id).then((res) => {
                        return res;
                      })
                        ? "black"
                        : "white",
                    }}
                    onClick={() => addFavorite(elem)}
                  >
                    <StarOutlineIcon />
                  </IconButton>
                  <IconButton
                    // sx={{
                    //   backgroundColor: addLike(elem.id) ? "white" : "",
                    //   color: addLike(elem.id) ? "black" : "",
                    // }}
                    onClick={() => addLike(elem.id)}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                </>
              )}
            </div>
          ))}
        </div>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <Pagination onChange={handleChange} count={count} color="primary" />
        </Stack>
        <AddProduct open={open} closeModal={closeModal} />
      </div>
    </>
  );
}
