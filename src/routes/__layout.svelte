<script>
	import '../app.postcss';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	let dark = true;
</script>

<div class:dark>
	<Header bind:dark />
	<main class="container max-w-6xl mx-auto px-6 pt-24">
		<slot />
	</main>

	<Footer />
</div>

<!-- <style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style> -->
