// https://nuxt.com/docs/migration/plugins-and-middleware
export default defineNuxtPlugin(() => {
	const formatNumber = (number) => {
		try {
			return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		} catch (error) {
			return number;
		}
	};

	const dateFormat = (t, type) => {
		let result = "";
		if (t != null) {
			if (type == null || type == "time") {
				result = t.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1-$2-$3 $4:$5:$6");
			} else if (type == "date") {
				result = t.substr(0, 8).replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
			}
		}
		return result;
	};

	const padNumber = (num) => {
		return num < 10 ? "0" + num : num;
	};

	return {
		provide: {
			formatNumber,
			dateFormat,
			padNumber,
		},
	};
});
