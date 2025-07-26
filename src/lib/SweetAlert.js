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

export const alertComfirm = async ({ message, fun = () => {} }) => {
	const response = await Swal.fire({
		icon: 'question',
		title: 'Confirm',
		text: message,
		confirmButtonText: 'Yes',
		cancelButtonText: 'No',
		showCancelButton: true,
		confirmButtonColor: '#d33',
		cancelButtonColor: '#3085d6'
	}).then((result) => {
		if (result.isConfirmed) {
			fun();
		}
		return result;
	});

	return response.isConfirmed;
};
