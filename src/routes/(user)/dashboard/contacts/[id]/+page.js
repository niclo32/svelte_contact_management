import { goto } from '$app/navigation';
import { addressList, addressRemove } from '$lib/api/AddressApi';
import { alertSuccess, alertError } from '$lib/SweetAlert';

/** @type {import('./$types').PageLoad} */

export async function load({ parent }) {
	const { token, contact, contact_id } = await parent();

	if (!token) {
		goto('/login');
		return;
	}

	const getAddressList = async () => {
		try {
			const response = await addressList(token, contact.id);
			const responseBody = await response.json();

			if (response.status == 200) {
				return {
					addresses: responseBody.data
				};
			}
			throw new Error(responseBody.errors || 'Failed to fetch address list');
		} catch (error) {
			return {
				addresses: [],
				status: 500,
				error: error.message
			};
		}
	};

	const removeAddress = async (addressId) => {
		try {
			const response = await addressRemove(token, contact_id, addressId);
			const responseBody = await response.json();

			if (response.status == 200) {
				return {
					status: 200,
					message: 'Address removed successfully'
				};
			}
			throw new Error(responseBody.errors || 'Failed to remove address');
		} catch (error) {
			return {
				status: 500,
				error: error.message
			};
		}
	};

	const initialAddresses = await getAddressList();

	return {
		...initialAddresses,
		getAddressList,
		removeAddress
	};
}
