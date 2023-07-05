import { fetchProduct } from '../../../endpoints/products.js';

export function load({ params, fetch }) {
	return {
		product: fetchProduct(params.product, fetch)
	};
}
