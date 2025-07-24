<script>
	import { goto } from '$app/navigation';
	import { userLogout } from '$lib/api/UserApi';
	import { onMount } from 'svelte';
	import { on } from 'svelte/events';

	/** @type {import('./$types').PageData} */

	onMount(async () => {
		const token = localStorage.getItem('token');
		await userLogout(token);
		localStorage.removeItem('token');
		goto('/login');
	});
</script>
