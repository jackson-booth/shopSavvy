import { fetchProducts } from '../../endpoints/products.js';

export async function load({ fetch }) {
	const categories = ['smartphones', 'laptops', 'home-decoration', 'skincare'];
	const productsByCategory = [];

	for (const category of categories) {
		// TODO: Add categories back in
		const prods = await fetchProducts(fetch, 4, category);
		productsByCategory.push({
			category: category,
			products: prods
		});
	}

	return {
		productsByCategory
	};
}
