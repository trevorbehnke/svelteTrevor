<script>
	import { page } from '$app/stores';
	import { MoonIcon, SunIcon } from 'heroicons-svelte/solid';
	import { browser } from '$app/env';
	let prefersLight = browser ? Boolean(JSON.parse(localStorage.getItem('prefersLight'))) : false;
</script>

<nav
	class="transition-colors duration-100 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-50 py-10 fixed w-full z-10 pin-t"
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
					{#if browser}
						<button
							type="button"
							role="switch"
							aria-label="Toggle Dark Mode"
							aria-checked={!prefersLight}
							class="h-4 w-4 sm:h-8 sm:w-8 sm:p-1"
							on:click={() => {
								prefersLight = !prefersLight;
								localStorage.setItem('prefersLight', prefersLight.toString());

								if (prefersLight) {
									document.querySelector('html').classList.remove('dark');
								} else {
									document.querySelector('html').classList.add('dark');
								}
							}}
						>
							{#if prefersLight}
								<MoonIcon class="text-gray-500" />
							{:else}
								<SunIcon class="text-yellow-500" />
							{/if}
						</button>
					{/if}
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
