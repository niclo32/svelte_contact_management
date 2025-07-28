import { goto } from '$app/navigation';

/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {
	const { token, contact } = await parent();

	if (!token) {
		goto('/login');
	} else {
		goto(`/dashboard/contacts/${contact.id}`);
	}
	return {};
}
