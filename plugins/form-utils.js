import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
	const togglePasswordType = (event) => {
		try {
			const inputElement = event.target.parentElement.querySelector("input");
			const buttonElement = event.target;

			if (inputElement && buttonElement) {
				const isPassword = inputElement.type === "password";
				inputElement.type = isPassword ? "text" : "password";
				buttonElement.classList.toggle("active", isPassword);
			}
		} catch (e) {
			console.error(e);
		}
	};

	return {
		provide: {
			togglePasswordType,
		},
	};
});
