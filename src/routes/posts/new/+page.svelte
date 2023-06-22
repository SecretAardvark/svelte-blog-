<script lang="ts">
	import { Posts } from '$lib/posts';
	import type { Post } from '$lib/posts';

	let posts: Post[] = [];
	// let posts = [];
	let postId = 0;
	Posts.subscribe((value) => {
		posts = value;
	});

	let submitPost = () => {
		let newPost = {
			id: postId++,
			title: String(document.getElementById('Title')?.value),
			body: String(document.getElementById('Content')?.value)
		};

		Posts.update((Posts) => [...posts, newPost]);
		console.log(posts);
	};
</script>

<div class="form-control items-baseline">
	<form class="form-control">
		<h1>New Post</h1>
		<input type="text" id="Title" placeholder="Title" />
		<textarea
			name="Post Content"
			id="Content"
			placeholder="Post content here..."
			cols="70"
			rows="10"
		/>
		<button
			type="submit"
			on:click={() => {
				submitPost();
			}}
			class="btn btn-secondary max-w-sm">Submit</button
		>
	</form>
</div>

<style>
	h1 {
		@apply font-bold text-center text-4xl mb-6 flex;
	}
	input {
		@apply input input-bordered input-primary mb-4 flex w-full max-w-xl;
	}
	textarea {
		@apply textarea textarea-primary mb-4 textarea-bordered max-w-xl;
	}
</style>
