import { fetchProducts } from '../endpoints/products.js';

export async function load({ fetch }) {
	const prods = await fetchProducts(fetch);

	return {
		products: prods
	};
}
