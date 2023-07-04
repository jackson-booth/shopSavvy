<script>
	import { removeFromCart } from '../../endpoints/cart.js';

	export let data;
	$: items = data.cartItems;

	const remove = (productId) => {
		removeFromCart(productId);
		items = items.filter((product) => product.id !== productId);
	};
</script>

<section>
	<h2 class="text-2xl font-bold border-b-2 mt-4">Shopping Cart</h2>
	{#if items.length === 0}
		<p class="mt-4">No items in cart!</p>
	{:else}
		{#each items as item}
			<article class="flex my-2 border-b-2 pb-2">
				<div class="h-[10rem] w-[10rem]">
					<img src={item.images[0]} alt={item.title} class="w-full h-full object-contain" />
				</div>
				<section class="flex flex-col justify-between w-full ml-4">
					<div class="flex justify-between">
						<div>{item.title} - {item.description}</div>
						<div class="ml-4 font-bold">${item.price}.00</div>
					</div>
					<div>
						<button on:click={() => remove(item.id)} class="text-gray-500 text-sm">Remove</button>
					</div>
				</section>
			</article>
		{/each}
	{/if}
</section>
