<script lang="ts">
	import 'daisyui';
	import '../app.css';
</script>

<div class="navbar mb-12">
	<div class="flex-2">
		<a href="/">Home</a>
	</div>
	<div class="flex-2">
		<a href="/posts">Posts</a>
	</div>
</div>
<slot />

<style>
	a {
		@apply btn bg-primary-focus ml-2 text-white btn-ghost text-lg;
	}
</style>
