import { goto } from '$app/navigation';
import { contactDetail } from '$lib/api/ContactApi';

/** @type {import('./$types').LayoutLoad} */
export async function load({ params }) {
	try {
		const token = localStorage.getItem('token');
		const response = await contactDetail(token, params.id);
		const responseBody = await response.json();

		if (response.status == 200) {
			return {
				contact: responseBody.data,
				token,
				contact_id: params.id
			};
		} else {
			return {
				status: 500,
				error: responseBody.errors || 'Something went wrong'
			};
		}
	} catch (error) {
		return {
			status: 500,
			error: error.message || 'Something went wrong'
		};
	}
}
