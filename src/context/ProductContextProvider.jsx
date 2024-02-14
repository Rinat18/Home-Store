import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API } from "../consts/const";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: {},
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
  }
}

export default function ProductContextProvider({children}) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE)
  const navigate = useNavigate()

  // ! ADD
  const addProduct = async (obj) => {
    await axios.post(API,obj)
    navigate('/')
  }

  // ! READ

  const readProducts = async () => {
    const {data} = await axios(API)
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data
    })
  }

  const values = {
    addProduct,
    readProducts,
    products: state.products,
  }

  return <productContext.Provider>{children}</productContext.Provider>;
}
