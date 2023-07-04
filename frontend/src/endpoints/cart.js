import { writable, derived } from 'svelte/store';

/**
 * Contains array of product ids
 */
export const cart = writable([]);

export const addToCart = (productId) => {
	cart.update((items) => {
		if (!items.find((id) => id === productId)) items.push(productId);
		return items;
	});
};

export const removeFromCart = (productId) => {
	cart.update((items) => {
		const filtered = items.filter((id) => id !== productId);
		console.log({ filtered, productId, items });
		return filtered;
	});
};

export const numCartItems = derived(cart, ($cart) => $cart.length);
