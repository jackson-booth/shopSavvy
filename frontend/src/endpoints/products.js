export const fetchProduct = async (id) => {
	const res = await fetch(`http://localhost:8000/products/${id}`);
	const product = await res.json();
	return product;
};

export const fetchProducts = async () => {
	const res = await fetch(`http://localhost:8000/products`);
	const json = await res.json();
	return json;
};
