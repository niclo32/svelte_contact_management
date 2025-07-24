<script>
	import { goto } from '$app/navigation';
	/** @type {{ data: import('./$types').PageData }} */
	const token = localStorage.getItem('token');
	if (token) {
		goto('/dashboard/contacts');
	} else {
		goto('/login');
	}
</script>
