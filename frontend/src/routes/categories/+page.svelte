<script>
	import Gallery from '../../components/Gallery.svelte';
	import LargeBanner from '../../components/LargeBanner.svelte';

	export let data;
	$: productsByCategory = data.productsByCategory;

	const formatHeader = (header) => {
		const capitalized = header.charAt(0).toUpperCase() + header.slice(1);
		return capitalized.replace('-', ' ');
	};
</script>

<LargeBanner
	ctaText={'Buy now'}
	message="Get 25% off watches!"
	imgSrc={'https://images.timex.com/image/upload/q_auto,f_auto/e_sharpen:120,c_fill/Catalogs/timex-master-catalog/images/TW2V68700.png'}
	imgText={'Watch'}
/>

{#await productsByCategory}
	<p>Loading...</p>
{:then productsByCat}
	{#each productsByCat as products}
		<div class="border-b-2 my-8 pb-8">
			<h2 class="text-xl font-bold">{formatHeader(products.category)}</h2>
			<Gallery products={products.products} />
		</div>
	{/each}
{/await}
