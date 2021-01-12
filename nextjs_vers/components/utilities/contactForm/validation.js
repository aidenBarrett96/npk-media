import { isEmpty, isEmail } from 'validator';

export const useValidation = (values) => {
	// set initial error list to empty
	let errorList = {
		name: [],
		email: [],
	};

	isEmpty(values.name) && errorList.name.push('Please enter your name');
	!isEmail(values.email) && errorList.email.push('Please enter a valid email');

	const total = errorList.name.length + errorList.email.length;

	const returnable = {
		errorList: errorList,
		totalErrors: total,
	};

	return returnable;
};
