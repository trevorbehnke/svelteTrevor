<script>
	import '../app.postcss';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="text-gray-900 dark:text-gray-100 flex flex-col min-h-screen">
	<div class="mx-auto flex flex-col flex-grow w-full max-w-4xl">
		<Header />
		<main class="flex flex-col w-full flex-grow py-4 px-4">
			<slot />
		</main>
		<Footer />
	</div>
</div>
