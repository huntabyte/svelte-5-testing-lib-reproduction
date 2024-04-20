<script lang="ts">
	import { setContext, type Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	setContext('parent', 'I am the parent');
</script>

{@render children?.()}
