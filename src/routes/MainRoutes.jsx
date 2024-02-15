import React from "react";
import CartPage from "../pages/Cart/CartPage";
import HomePage from "../pages/Home/HomePage";
import DetailPage from "../pages/Detail/DetailPage";
import AdminPage from "../pages/Admin/AdminPage";
import FavoritesPage from "../pages/Favorite/FavoritesPage";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/products/AddProduct";
import CardsList from "../components/products/CardsList";

export default function MainRoutes() {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage /> },
    { link: "/detail/:id", element: <DetailPage /> },
    { link: "/admin", element: <AdminPage /> },
    { link: "/favorite", element: <FavoritesPage /> },
    { link: "/cart", element: <CartPage /> },
    { link: "/list", element: <CardsList /> },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((elem) => (
          <Route key={elem.link} path={elem.link} element={elem.element} />
        ))}
      </Routes>
    </>
  );
}
