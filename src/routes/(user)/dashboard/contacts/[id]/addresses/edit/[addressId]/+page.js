import { goto } from '$app/navigation';
import { addressDetail } from '$lib/api/AddressApi';
import { error } from '@sveltejs/kit';
/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {
	const { token, contact } = await parent();

	if (!token) {
		goto('/login');
	} else {
		const response = await addressDetail(token, contact.id, params.addressId);
		const responseBody = await response.json();
		if (response.status == 200) {
			return {
				status: 200,
				address: responseBody.data,
				errors: null
			};
		} else {
			return {
				status: 500,
				address: null,
				errors: responseBody.errors
			};
		}
	}
}
