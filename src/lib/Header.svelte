<script>
	import { page } from '$app/stores';
	import UISunOutline from './UISunOutline.svelte';
	import UIMoonSolid from './UIMoonSolid.svelte';
	import { getRawBody } from '@sveltejs/kit/node';
	// export let dark;
	import { onMount } from 'svelte';
</script>

<nav
	class="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-50 py-10 fixed w-full z-10 pin-t"
>
	<div
		class="flex flex-col sm:flex-row justify-between max-w-6xl container mx-auto px-6 items-center"
	>
		<div class="mb-4 sm:mb-0 w-12 h-12">
			<a rel="prefetch" href="/"
				><img class="object-contain" src="./t-block-light.png" alt="trevor-logo" /></a
			>
		</div>
		<div>
			<ul class="flex justify-center w-full">
				<li class:active={$page.path === '/'}>
					<a rel="prefetch" class="mx-4 text-lg" href="/">Home</a>
				</li>
				<li class:active={$page.path === '/about'}>
					<a rel="prefetch" class="mx-4 text-lg" href="/about">About</a>
				</li>
				<li class:active={$page.path === '/portfolio'}>
					<a rel="prefetch" class="mx-4 text-lg" href="/portfolio">Portfolio</a>
				</li>
				<li class:active={$page.path === '/blog'}>
					<a rel="prefetch" class="mx-4 text-lg" href="/blog">Blog</a>
				</li>
				<li>
					<div class="flex-0">
						<a
							href="/"
							on:click|preventDefault={() => {
								window.document.body.classList.toggle('dark');
							}}>😎</a
						>
					</div>
				</li>
				<li>
					<!-- <ThemeToggle /> -->
				</li>
			</ul>
		</div>
	</div>
</nav>

<style>
	.active {
		color: #15b8a6;
		font-weight: bold;
	}
</style>
