<script lang="ts">
	import { Posts } from '$lib/posts';

	let posts = [];
	Posts.subscribe((value) => {
		posts = value;
	});
</script>

<div class="flex">
	<aside class="max-w-md">
		<h1 class="text-center">Latest posts</h1>

		<ul>
			{#each posts as post}
				<li>
					<a href="/posts/{post.id}">{post.title}</a>
					<p>{post.body}</p>
				</li>
			{/each}
		</ul>
	</aside>
	<div class="divider divider-horizontal" />
	<div class="flex-1">
		<slot />
	</div>
</div>
