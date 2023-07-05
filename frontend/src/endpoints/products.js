import { PUBLIC_BACKEND_URL } from '$env/static/public';

export const fetchProduct = async (id, fetch = fetch) => {
	const res = await fetch(`${PUBLIC_BACKEND_URL}/products/${id}`);
	const product = await res.json();
	return product;
};

export const fetchProducts = async (fetch = fetch, limit = null, category = null) => {
	let url = `${PUBLIC_BACKEND_URL}/products`;

	if (limit || category) {
		url = url + '?';
	}

	if (limit) {
		url = url + `limit=${limit}`;
	}

	if (category) {
		url = url + `&category=${category}`;
	}

	const res = await fetch(url);
	const json = await res.json();
	return json;
};
