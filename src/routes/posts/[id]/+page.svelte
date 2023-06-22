<script lang="ts">
	import { Posts } from '$lib/posts';
	import type { Post } from '$lib/posts';
	import { page } from '$app/stores';

	let params = $page.params;
	let posts: Post[] = [];

	Posts.subscribe((value) => {
		console.log('posts value: ', value);
		posts = value;
	});

	$: post = posts.find((post) => {
		console.log('post.title:', post.title);
		console.log('params.id:', params.id);
		return String(post.id).toLowerCase() === params.id;
	});
	console.log('params:', params);
	console.log('post:', post);
</script>

{#if post}
	<h1 class="">{post.title}</h1>
	<p>{post.body}</p>
{:else}
	<p>Post not found</p>
{/if}
