import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API } from "../consts/const";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: {},
  comments: [],
  likes: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    case ACTIONS.GET_COMMENTS:
      return { ...state, comments: action.payload };
    case ACTIONS.GET_LIKES:
      return { ...state, likes: action.payload };
    default:
      return state;
  }
}

export default function ProductContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  // ! ADD
  const addProduct = async (obj) => {
    await axios.post(API, obj);
    navigate("/");
  };

  // ! READ

  const readProducts = async () => {
    const { data } = await axios(`${API}${window.location.search}`);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };

  // ! DELETE
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    readProducts();
  };

  // ! EDIT
  const editProduct = async (id, obj) => {
    await axios.patch(`${API}/${id}`, obj);
    readProducts();
  };

  // ! GET ONE PRODUCT

  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    console.log(data);
    dispatch({
      type: ACTIONS.GET_ONE_PRODUCT,
      payload: data,
    });
  };

  // ! GET COMMENTS

  const readComments = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: ACTIONS.GET_COMMENTS,
      payload: data.comments,
    });
  };

  // ! ADD COMMENTS

  const addComments = async (id, obj) => {
    const { data } = await axios(`${API}/${id}`);
    data.comments.push(obj);
    await axios.patch(`${API}/${id}`, data);
    readComments(id);
  };

  // ! GET COMMENTS

  const readLikes = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: ACTIONS.GET_LIKES,
      payload: data.likes,
    });
  };

  // ! ADD Likes

  const addLikes = async (id, obj) => {
    const { data } = await axios(`${API}/${id}`);
    const length = data.likes.filter((elem) => elem.user == obj.user);
    if (length.length > 0) {
      data.likes = data.likes.filter((elem) => elem.user !== obj.user);
    } else {
      data.likes.push(obj);
    }
    await axios.patch(`${API}/${id}`, data);
    readLikes(id);
  };

  const checkLike = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    const countLike = data.likes;
    console.log(countLike.length);
  };

  const values = {
    addProduct,
    readProducts,
    products: state.products,
    deleteProduct,
    editProduct,
    oneProduct: state.oneProduct,
    getOneProduct,
    addComments,
    readComments,
    comments: state.comments,
    readLikes,
    addLikes,
    likes: state.likes,
    checkLike,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
}
