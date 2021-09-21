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
	import Nav from '$lib/nav.svelte';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	onMount(async () => {
		themeChange(false);
	});

	export let pages;
</script>

<main class="container max-w-7xl mx-auto px-4">
	<Nav {pages} />
	<slot />
</main>
