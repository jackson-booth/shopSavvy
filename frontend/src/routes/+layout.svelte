<script>
	import '../app.css';
	import NavBar from '../components/NavBar.svelte';
</script>

<main class="w-full h-full">
	<div>
		<NavBar />
		<div class="max-w-5xl m-auto font-primary">
			<slot />
		</div>
	</div>
</main>
