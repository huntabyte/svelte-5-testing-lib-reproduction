import TestComponent from '$lib/TestComponent.svelte';
import { render } from '@testing-library/svelte/svelte5';
import { it } from 'vitest';

it('renders the image with the correct src', async () => {
	const { getByText } = render(TestComponent);
});
