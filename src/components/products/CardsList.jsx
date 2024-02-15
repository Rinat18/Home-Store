import React, { useEffect, useState } from 'react';
import { useProduct } from '../../context/ProductContextProvider';
import { Button, IconButton } from '@mui/material';
import AddProduct from './AddProduct';
import './product.scss';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditProduct from './EditProduct';
import { Pagination, Stack, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { AddShoppingCart } from '@mui/icons-material';
import { useCart } from '../../context/CartContextProvider';

export default function CardsList() {
	const { readProducts, products, deleteProduct } = useProduct();
	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();
	const { addProductToCart, checkProductInCart } = useCart();
	useEffect(() => {
		readProducts();
	}, [searchParams]);
	const openModal = () => {
		setOpen(true);
	};
	const closeModal = () => {
		setOpen(false);
	};
	const openModal2 = () => {
		setOpen2(true);
	};
	const closeModal2 = () => {
		setOpen2(false);
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
	const [search, setSearch] = useState(searchParams.get('q') || '');
	useEffect(() => {
		setSearchParams({
			q: search,
		});
	}, [search]);
	return (
		<>
			<Button onClick={openModal}>Add Product</Button>
			<div className="search">
				<input
					type="text"
					placeholder="Search..."
					className="search__input"
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<div className="cards-list">
				<div className="cards-list__container">
					{currentData().map((elem) => (
						<div key={elem.id} className="card">
							<div className="card__imageBlock">
								<img className="card__image" src={elem.image} alt="" />
							</div>
							<div className="card__title">{elem.title}</div>
							<div className="card__price">Price: {elem.price}$</div>
							<div className="card__admin">
								<EditIcon onClick={openModal2} />
								<DeleteIcon onClick={() => deleteProduct(elem.id)} />
							</div>
							<IconButton
								sx={{
									backgroundColor: checkProductInCart(elem.id) ? 'black' : '',
									color: checkProductInCart(elem.id) ? 'white' : '',
								}}
								onClick={() => addProductToCart(elem)}>
								<AddShoppingCart />
							</IconButton>
							<EditProduct open2={open2} elem={elem} closeModal2={closeModal2} />
						</div>
					))}
				</div>
			</div>
			<Stack spacing={2}>
				<Pagination onChange={handleChange} count={count} color="primary" />
			</Stack>
			<AddProduct open={open} closeModal={closeModal} />
		</>
	);
}
