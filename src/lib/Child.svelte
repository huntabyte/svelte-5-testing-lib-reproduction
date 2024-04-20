<script lang="ts">
	import { getContext } from 'svelte';

	const parent = getContext('parent');
</script>

<h1>Child</h1>
{parent}
