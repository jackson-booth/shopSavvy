<script>
	import Gallery from '../components/Gallery.svelte';
	import LargeBanner from '../components/LargeBanner.svelte';

	export let data;
	$: storeProducts = data.products;
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
