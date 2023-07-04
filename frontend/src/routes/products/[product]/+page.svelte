<script>
	import LargeButton from '../../../components/LargeButton.svelte';
	import { addToCart } from '../../../endpoints/cart.js';
	import RatingStars from '../../../components/RatingStars.svelte';

	export let data;
	$: product = data.product;
	$: selectedImg = product ? product.images[0] : '';
</script>

<section>
	{#await product}
		<p>Loading...</p>
	{:then loadedProduct}
		{#if loadedProduct}
			<article class="grid grid-cols-2 gap-16 h-[50vh]">
				<section>
					<img src={selectedImg} alt={loadedProduct.title} class="h-3/5 object-contain" />
					<div class="grid grid-cols-5 justify-between mt-2">
						{#each loadedProduct.images as image}
							<button
								on:click={() => (selectedImg = image)}
								class="border-primary mx-1 bg-red-400"
								class:border-4={selectedImg === image}
							>
								<img
									src={image}
									alt={loadedProduct.title}
									class="object-cover w-full h-full overflow-hidden"
								/>
							</button>
						{/each}
					</div>
				</section>
				<section class="mt-12">
					<div class="grid grid-rows-3 items-center">
						<h2 class="text-2xl font-bold">{loadedProduct.title}</h2>
						<p class="text-gray-500 text-sm">{loadedProduct.description}</p>
						<div class="object-cover">
							<RatingStars rating={product.rating} />
						</div>
					</div>
					<div class="text-2xl font-bold border-y-2 my-2 py-6">
						<p>${loadedProduct.price}</p>
					</div>
					<div class="my-2 py-6">
						<LargeButton text={'Add to cart'} onClick={() => addToCart(loadedProduct.id)} />
					</div>
				</section>
			</article>
		{/if}
	{/await}
</section>
