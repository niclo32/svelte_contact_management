/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {
	const { token, contact } = await parent();

	return {
		contact_id: params.id
	};
}
