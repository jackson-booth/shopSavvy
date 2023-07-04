<script>
	import Gallery from '../components/Gallery.svelte';
	import LargeBanner from '../components/LargeBanner.svelte';
	import NavBar from '../components/NavBar.svelte';
	import { fetchProducts } from '../endpoints/products.js';

	let storeProducts = fetchProducts();
</script>

<LargeBanner
	ctaText={'Buy now'}
	message="Get 40% off a new computer today"
	imgSrc={'https://photos5.appleinsider.com/price_guide/m1-macbook-pro-pp-header.png'}
	imgText={'MacBook Pro'}
/>

{#await storeProducts}
	<p>Loading...</p>
{:then productList}
	<Gallery products={productList} />
{/await}
