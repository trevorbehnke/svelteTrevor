<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/posts.json');
		if (res.ok) {
			const { posts } = await res.json();
			return { props: { posts } };
		}
	};
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script>
	export let posts;
	let searchTerm = '';
	let filteredList = [];
	$: {
		if (searchTerm) {
			filteredList = posts.filter((post) =>
				post.title.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredList = [...posts];
		}
	}
</script>

<svelte:head>
	<title>Trevor Behnke | Blog</title>
</svelte:head>

<main>
	<div>
		<input
			class="rounded-md text-md p-2 border-2 text-black"
			bind:value={searchTerm}
			placeholder="Search Posts..."
		/>
	</div>

	<div class="py-4 grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
		{#each filteredList as { title, slug, excerpt, coverImage, tags }}
			<div class="card text-center shadow-2xl">
				<figure class="px-10 pt-10">
					<img class="rounded-xl" src={coverImage.url} alt={`Cover image for ${title}`} />
				</figure>
				<div class="card-body">
					<h2 class="card-title">{title}</h2>
					<p class="excerpt">{excerpt}</p>
					<div class="flex flex-wrap justify-center mt-5 space-x-2">
						{#each tags as tag}
							<span class="badge badge-primary mt-3">{tag}</span>
						{/each}
					</div>
					<div class="justify-center card-actions">
						<a href={`/posts/${slug}`} class="btn btn-outline btn-primary">Read &rArr;</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</main>
