<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/pages.json');
		if (res.ok) {
			const { pages } = await res.json();
			return { props: { pages } };
		}
	};
</script>

<script>
	import '../app.postcss';
	import Header from '$lib/Header.svelte';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	onMount(async () => {
		themeChange(false);
	});
</script>

<Header />
<main class="container max-w-7xl mx-auto px-4 pt-12">
	<slot />
</main>
