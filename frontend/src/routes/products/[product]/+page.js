import { fetchProduct } from '../../../endpoints/products.js';

export function load({ params }) {
	return {
		product: fetchProduct(params.product)
	};
}
