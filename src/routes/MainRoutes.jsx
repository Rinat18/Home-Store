import React from "react";
import CartPage from "../pages/Cart/CartPage";
import HomePage from "../pages/Home/HomePage";
import DetailPage from "../pages/Detail/DetailPage";
import AdminPage from "../pages/Admin/AdminPage";
import FavoritesPage from "../pages/Favorite/FavoritesPage";
import { Navigate, Route, Routes } from "react-router-dom";
import AddProduct from "../components/products/AddProduct";
import CardsList from "../components/products/CardsList";
import EditProduct from "../components/products/EditProduct";
import { useAuth } from "../context/AuthContextPrvider";
import { ADMIN } from "../consts/const";

export default function MainRoutes() {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage /> },
    { link: "/detail/:id", element: <DetailPage /> },
    { link: "/auth", element: <AdminPage /> },
    { link: "/favorite", element: <FavoritesPage /> },
    { link: "/cart", element: <CartPage /> },
    { link: "/list", element: <CardsList /> },
  ];
  const ADMIN_ROUTES = [{ link: "/editProduct/:id", element: <EditProduct /> }];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((elem) => (
          <Route key={elem.link} path={elem.link} element={elem.element} />
        ))}
        {user
          ? ADMIN_ROUTES.map((elem) => <Route key={elem.id} path={elem.link} element={user.email === ADMIN ? elem.element : <Navigate to="*" />} />)
          : null}
      </Routes>
    </>
  );
}
