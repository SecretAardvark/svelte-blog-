<script lang="ts">
	import 'daisyui';
	import '../app.css';
	//TODO: fix the button styling in the navbar
	//TODO:  /posts large preview styling
	//TODO: fix the routing once you're on /posts/[slug]

	//FEATURE: Delete post.
</script>

<html data-theme="forest" lang="en">
	<div class="navbar mb-12">
		<div class="flex-1 menu-lg menu-title">
			<a href="/">
				<h1>Svelte Blog</h1>
			</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				<li>
					<div class="flex-2">
						<a href="/">Home</a>
					</div>
				</li>
				<li>
					<div class="flex-2">
						<a href="/posts">Posts</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<slot />
</html>

<style>
	a {
		@apply btn bg-primary ml-2 btn-ghost text-lg;
	}
</style>
