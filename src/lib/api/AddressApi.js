export const addressCreate = async (
	token,
	contact_id,
	{ street, city, province, country, postal_code }
) => {
	return fetch(`${import.meta.env.VITE_URL_API}/contacts/${contact_id}/addresses`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: token
		},
		body: JSON.stringify({ street, city, province, country, postal_code })
	});
};

export const addressUpdate = async (
	token,
	contact_id,
	id,
	{ street, city, province, country, postal_code }
) => {
	return fetch(`${import.meta.env.VITE_URL_API}/contacts/${contact_id}/addresses/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: token
		},
		body: JSON.stringify({ street, city, province, country, postal_code })
	});
};

export const addressList = async (token, contact_id) => {
	return fetch(`${import.meta.env.VITE_URL_API}/contacts/${contact_id}/addresses`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			Authorization: token
		}
	});
};

export const addressRemove = async (token, contact_id, id) => {
	return fetch(`${import.meta.env.VITE_URL_API}/contacts/${contact_id}/addresses/${id}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			Authorization: token
		}
	});
};
