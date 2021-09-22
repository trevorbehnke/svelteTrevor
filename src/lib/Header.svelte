<script>
	import { page } from '$app/stores';
	// import ThemeToggle from './themeToggle.svelte';
</script>

<nav class="backdrop-filter backdrop-blur py-10 fixed w-full z-10 pin-t">
	<div class=" flex justify-between flex-row max-w-6xl container mx-auto px-6">
		<div class="w-12 h-12">
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
					<a rel="prefetch" class="mx-4 text-lg" href="/about">Portfolio</a>
				</li>
				<li class:active={$page.path === '/blog'}>
					<a rel="prefetch" class="mx-4 text-lg" href="/blog">Blog</a>
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
		border-bottom: 2px solid red;
	}
</style>
