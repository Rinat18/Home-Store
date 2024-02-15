import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API_F } from "../consts/const";

const favoritesContext = createContext();
export const UseFavorite = () => useContext(favoritesContext);

const INIT_STATE = {
  favorites: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_FAVORITES":
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
}

export default function FavoritesContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // ! ADD FAVORITE

  const addFavorite = async (obj) => {
    const { data } = await axios(API_F);
    const check = data.filter((elem) => elem.id == obj.id);
    if (check.length === 0) {
      await axios.post(API_F, obj);
    } else {
      await axios.delete(`${API_F}/${obj.id}`);
    }
    dispatch({
      type: "GET_FAVORITES",
      payload: data,
    });
  };

  // ! READ FAVORITE

  const readFavorite = async () => {
    const { data } = await axios(API_F);
    dispatch({
      type: "GET_FAVORITES",
      payload: data,
    });
  };

  // ! DELETE FAVORITE

  const deleteFavorite = async (id) => {
    await axios.delete(`${API_F}/${id}`);
    readFavorite();
  };

  // ! CHECK FAVORITE

  const checkFavorite = async (id) => {
    const { data } = await axios(API_F);
    console.log(data);
    if (data) {
      const check = data.filter((elem) => elem.id == id)
      console.log(check);
      return check.length > 0 ? true : false;
    }
    
  };
  console.log(checkFavorite().then((e)=> console.log(e)), "func");
  const values = {
    addFavorite,
    readFavorite,
    deleteFavorite,
    favorites: state.favorites,
    checkFavorite,
  };

  return (
    <favoritesContext.Provider value={values}>
      {children}
    </favoritesContext.Provider>
  );
}
