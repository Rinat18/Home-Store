import React, { createContext, useContext, useReducer } from 'react';
import { ACTIONS, API } from '../consts/const';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

export default function ProductContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, INIT_STATE);
	const navigate = useNavigate();

	// ! ADD
	const addProduct = async (obj) => {
		await axios.post(API, obj);
		navigate('/');
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

	const values = {
		addProduct,
		readProducts,
		products: state.products,
		deleteProduct,
		editProduct,
	};

	return <productContext.Provider value={values}>{children}</productContext.Provider>;
}
