<script lang="ts">
	import { Posts } from '$lib/posts';
	import type { Post } from '$lib/posts';

	let posts: Post[] = [];

	Posts.subscribe((value) => {
		posts = value;
	});
</script>

<div class="flex">
	<aside class="max-w-md">
		<h1>Latest posts</h1>

		<ul>
			{#each posts as post}
				<li>
					<h3><a href="/posts/{post.id}">{post.title}</a></h3>
					<p>{post.body}<a href="/posts/{post.id}" class="see-more">...see more</a></p>
					<div class="divider" />
				</li>
			{/each}
		</ul>
	</aside>
	<div class="divider divider-horizontal" />
</div>

<style>
	li {
		@apply ml-4;
	}
	h1 {
		@apply font-bold text-secondary-focus text-center text-2xl mb-4;
	}
	h3 {
		@apply font-bold italic text-lg mb-4 text-accent-focus text-neutral-content;
	}
	.see-more {
		@apply underline  text-right text-secondary  ml-2 italic;
	}
</style>
