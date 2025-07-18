import Swal from 'sweetalert2';

export const alertSuccess = async (message) => {
	return await Swal.fire({
		icon: 'success',
		title: 'Success',
		text: message,
		showConfirmButton: false,
		timer: 1500
	});
};

export const alertError = async (message) => {
	return await Swal.fire({
		icon: 'error',
		title: 'Ups',
		text: message,
		showConfirmButton: false,
		timer: 1500
	});
};
