import { goto } from '$app/navigation';

/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { token, contact } = await parent();

	if (!token) {
		goto('/login');
		return {};
	} else {
		return {
			contact,
			token
		};
	}
}
