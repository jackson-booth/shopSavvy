<script>
	export let text;
	export let onClick;
</script>

<button class="bg-tertiary px-4 py-2 rounded-3xl text-white max-w-[6rem] text-xs" on:click={onClick}
	>{text}</button
>
