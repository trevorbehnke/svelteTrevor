<script>
	import { page } from '$app/stores';
	// import ThemeToggle from './themeToggle.svelte';
</script>

<nav class="backdrop-filter backdrop-blur mt-0 fixed w-full z-10 pin-t p-3">
	<div class="flex flex-row max-w-7xl container mx-auto px-4">
		<div class="w-12 h-12">
			<img class="object-contain" src="./t-block-light.png" alt="trevor-logo" />
		</div>
		<ul class="flex justify-center w-full">
			<li class:active={$page.path === '/'}>
				<a rel="prefetch" class="mx-4 text-lg" href="/">Home</a>
			</li>
			<li class:active={$page.path === '/about'}>
				<a rel="prefetch" class="mx-4 text-lg" href="/about">About</a>
			</li>
			<li class:active={$page.path === '/blog'}>
				<a rel="prefetch" class="mx-4 text-lg" href="/blog">Blog</a>
			</li>
			<li>
				<!-- <ThemeToggle /> -->
			</li>
		</ul>
	</div>
</nav>

<style>
	.active {
		border-bottom: 2px solid red;
	}
</style>
