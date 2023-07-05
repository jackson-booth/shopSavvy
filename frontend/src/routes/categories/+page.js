import { fetchProducts } from '../../endpoints/products.js';

export async function load({ fetch }) {
	const categories = ['smartphones', 'mens-watches', 'laptops', 'skincare'];
	const productsByCategory = [];

	for (const category of categories) {
		// TODO: Add categories back in
		const prods = await fetchProducts(fetch);
		productsByCategory.push({
			category: category,
			products: prods
		});
	}

	return {
		productsByCategory
	};
}
