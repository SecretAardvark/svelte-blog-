<script lang="ts">
	import { Posts } from '$lib/posts';
	import type { Post } from '$lib/posts';

	let posts: Post[] = [];

	Posts.subscribe((value) => {
		posts = value;
	});
</script>

{#each posts as post}
	<a href="/posts/{post.id}">{post.title}</a>
	<p>{post.body}</p>
{/each}
