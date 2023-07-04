<script>
	import shopping_cart from '$lib/assets/shopping_cart.png';
	import shop_savvy from '$lib/assets/shopsavvy/logo-png.png';
	import { numCartItems } from '../endpoints/cart';
</script>

<section class="flex justify-center w-full text-xs py-2 sticky top-0 bg-white">
	<div class="w-[70rem] flex justify-between">
		<div class="grid grid-cols-4 gap-4 place-items-center">
			<div>
				<a href="/">
					<img src={shop_savvy} alt="Store Logo" class="rounded-lg" />
				</a>
			</div>
			<div class="col-span-3 flex justify-start w-full">
				<a href="/categories" class="mx-4"><div>Categories</div></a>
				<a href="/" class="mx-4"><div>Deals</div></a>
				<a href="/" class="mx-4"><div>New Items</div></a>
			</div>
		</div>
		<div class="flex place-items-center gap-4 px-4">
			<button class="bg-gray-300 rounded-md px-2 py-1 w-48 flex justify-between">
				<div class="inline text-slate-500">Search Product</div>
				<img
					class="inline"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/480px-Magnifying_glass_icon.svg.png"
					alt="Magnifying Glass"
					width="12"
					height="12"
				/>
			</button>
			<div>Account</div>
			<a href="/cart">
				{#if $numCartItems > 0}
					<div class="relative">
						<img src={shopping_cart} alt="" width="20" />
						<div class="absolute bottom-3 left-5 text-md text-primary font-bold">
							({$numCartItems})
						</div>
					</div>
				{:else}
					<img src={shopping_cart} alt="" width="20" />
				{/if}
			</a>
		</div>
	</div>
</section>
