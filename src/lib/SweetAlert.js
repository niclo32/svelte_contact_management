import Swal from 'sweetalert2';

export const alertSuccess = async ({ message, fun = () => {}, timer = 1500, confirm = false }) => {
	return await Swal.fire({
		icon: 'success',
		title: 'Success',
		text: message,
		showConfirmButton: confirm,
		timer: timer
	}).then(function () {
		fun();
	});
};

export const alertError = async ({ message, fun = () => {}, timer = 1500, confirm = false }) => {
	return await Swal.fire({
		icon: 'error',
		title: 'Ups',
		text: message,
		showConfirmButton: confirm,
		timer: timer
	}).then(function () {
		fun();
	});
};
