import React from "react";
import CartPage from "../pages/Cart/CartPage";
import HomePage from "../pages/HomePage/HomePage";
import DetailPage from "../pages/Detail/DetailPage";
import AdminPage from "../pages/Admin/AdminPage";
import FavoritesPage from "../pages/Favorite/FavoritesPage";
import { Route, Routes } from "react-router-dom";

export default function MainRoutes() {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage /> },
    { link: "/detail/:id", element: <DetailPage /> },
    { link: "/admin", element: <AdminPage /> },
    { link: "/favorite", element: <FavoritesPage /> },
    { link: "/cart", element: <CartPage /> },
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
