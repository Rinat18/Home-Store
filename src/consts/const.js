export const API = 'http://localhost:8001/products';
export const ACTIONS = {
	GET_PRODUCTS: 'GET_PRODUCTS',
	GET_ONE_PRODUCT: 'GET_ONE_PRODUCT',
	GET_CART: 'GET_CACTEGORIES',
	GET_COMMENTS: 'GET_COMMENTS',
	GET_LIKES: 'GET_LIKES',
};

// функция для получения данных из хранилища под ключом cart
export const getLocalStorage = () => {
	const cart = JSON.parse(localStorage.getItem('cart'));
	return cart;
};
// функция для подсчета для суммы всех товаров
export const calcTotalPrice = (products) => {
	const totalPrice = products.reduce((acc, curr) => acc + curr.subPrice, 0);
	return totalPrice;
};
// функция для подсчета всех товаров в корзине
export const getProductsCountInCart = () => {
	let cart = getLocalStorage();
	return cart ? cart.products.length : 0;
};

// функция для посчета стоимости за одну позицию
export const calcSubPrice = (elem) => {
	console.log(elem);
	return elem.item.price * elem.count;
};

export const API_F = "http://localhost:8001/favorites";

export const ADMIN = "admin@gmail.com"
