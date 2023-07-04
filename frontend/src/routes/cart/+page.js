import { get } from 'svelte/store';
import { fetchProduct } from '../../endpoints/products.js';
import { cart } from '../../endpoints/cart.js';

export async function load() {
	let cartItems = [];
	get(cart).forEach(async (id) => {
		const item = await fetchProduct(id);
		cartItems.push(item);
	});
	return {
		cartItems
	};
}
