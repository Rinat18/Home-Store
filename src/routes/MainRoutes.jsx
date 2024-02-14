import React from "react";
import CartPage from "../pages/Cart/CartPage";
import HomePage from "../pages/HomePage/HomePage";
import DetailPage from "../pages/Detail/DetailPage";
import AdminPage from "../pages/Admin/AdminPage";
import FavoritesPage from "../pages/Favorite/FavoritesPage";
import { Route, Routes } from "react-router-dom";

export default function MainRoutes() {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/detail/:id", element: <DetailPage /> },
    { id: 3, link: "/admin", element: <AdminPage /> },
    { id: 4, link: "/favorite", element: <FavoritesPage /> },
    { id: 5, link: "/cart", element: <CartPage /> },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((elem) => (
          <Route key={elem.id} path={elem.link} element={elem.element} />
        ))}
      </Routes>
    </>
  );
}
