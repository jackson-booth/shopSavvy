<script>
	import LargeButton from './LargeButton.svelte';

	export let message;
	export let ctaText;
	export let imgSrc;
	export let imgText;
</script>

<section class="bg-primary px-12 py-8 flex justify-between content-center flex-wrap">
	<div class="flex flex-col justify-center">
		<div class="text-white text-3xl font-bold mb-4 w-3/4">{message}</div>
		<LargeButton text={ctaText} />
	</div>
	<img class="inline mr-4" src={imgSrc} alt={imgText} width={200} height={200} />
</section>
