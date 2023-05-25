export const deleteAllCookies = () => {
	var cookies = document.cookie.split(";");

	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		var eqPos = cookie.indexOf("=");
		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	}
};

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const currencyFormatter = new Intl.NumberFormat("en-IN", {
	style: "currency",
	currency: "INR",
	minimumFractionDigits: 0,
	maximumFractionDigits: 2,
});

export const capitalize = (string: string): string => {
	if (!string) return string;
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const capitalizeAll = (string: string): string => {
	if (!string) return string;
	const words = string.split(" ");
	const newWords = words.map((word) => capitalize(word));
	return newWords.join(" ");
};
