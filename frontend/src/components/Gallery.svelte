<script>
	import SmallButton from './SmallButton.svelte';
	import RatingStars from './RatingStars.svelte';
	import { truncate } from '../helpers/helpers.js';
	import { addToCart } from '../endpoints/cart';

	export let products;
</script>

<section class="grid grid-cols-4 gap-12 py-4 text-sm">
	{#each products as product (product.id)}
		<article class="grid grid-cols-1 content-between">
			<a href="/products/{product.id}" class="flex justify-center p-2">
				<div class="h-[16rem] rounded-lg overflow-hidden">
					<img src={product.images[0]} alt={product.title} class="h-full w-full object-contain" />
				</div>
			</a>
			<div>
				<div class="flex justify-between text-md font-semibold">
					<h4>{truncate(product.title, 30)}</h4>
					<h4>${product.price}</h4>
				</div>
				<div class="text-xs">
					<p class="truncate mb-2">{product.description}</p>
					<RatingStars rating={product.rating} />
					<div class="mt-4">
						<SmallButton text={'Add to cart'} onClick={() => addToCart(product.id)} />
					</div>
				</div>
			</div>
		</article>
	{/each}
</section>
