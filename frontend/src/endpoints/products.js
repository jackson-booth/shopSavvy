import { PUBLIC_BACKEND_URL } from '$env/static/public';

export const fetchProduct = async (id, fetch = fetch) => {
	const res = await fetch(`${PUBLIC_BACKEND_URL}/products/${id}`);
	const product = await res.json();
	return product;
};

export const fetchProducts = async (fetch = fetch) => {
	const res = await fetch(`${PUBLIC_BACKEND_URL}/products`);
	const json = await res.json();
	return json;
};
