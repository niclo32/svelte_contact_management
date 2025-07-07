export const userRegister = async ({ username, password, name }) => {
	return fetch(`${import.meta.env.VITE_URL_API}/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({ username, password, name })
	});
};
