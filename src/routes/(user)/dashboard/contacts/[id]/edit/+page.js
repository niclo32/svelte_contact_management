import { goto } from '$app/navigation';
import { contactDetail } from '$lib/api/ContactApi';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		const token = localStorage.getItem('token');

		if (!token) goto('/login');

		const response = await contactDetail(token, params.id);
		const responseBody = await response.json();

		if (response.status == 200) {
			return {
				contact: responseBody.data,
				token
			};
		} else {
			throw new Error(responseBody.errors || 'Something went wrong');
		}
	} catch (error) {
		return {
			status: 500,
			error: error.message
		};
	}
}
