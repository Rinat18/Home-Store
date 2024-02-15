import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

import FavoritesContextProvider from "./context/FavoritesContextProvider";
import AuthContextPrvider from "./context/AuthContextPrvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthContextPrvider>
      <FavoritesContextProvider>
        <ProductContextProvider>
         	<CartContextProvider>
				    <App />
			    </CartContextProvider>
        </ProductContextProvider>
      </FavoritesContextProvider>
    </AuthContextPrvider>
  </BrowserRouter>
);
