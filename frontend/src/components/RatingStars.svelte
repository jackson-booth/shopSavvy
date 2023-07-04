<script>
	import filled_star from '$lib/assets/filled_star.png';
	import empty_star from '$lib/assets/empty_star.png';

	export let rating;
	$: numFilledStars = Math.round(rating);
	$: numEmptyStars = 5 - numFilledStars;
</script>

<div class="flex">
	{#each [...Array(numFilledStars).keys()] as starId}
		<img id={starId} src={filled_star} alt="" height="10" width="10" />
	{/each}
	{#each [...Array(numEmptyStars).keys()] as starId}
		<img id={starId + numFilledStars} src={empty_star} alt="" height="10" width="10" />
	{/each}
</div>
