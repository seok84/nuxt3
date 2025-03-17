export default defineNuxtPlugin(() => {
	const toggleState = (event) => {
		let res = event.target.closest(".toggle-title");
		res.classList.toggle("active");
	};

	return {
		provide: {
			toggleState,
		},
	};
});
