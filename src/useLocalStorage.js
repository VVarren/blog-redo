import react, { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
	const [value, setValue] = useState(() => {
		const value = JSON.parse(localStorage.getItem(key));
		return value || initialValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value]);

	return [value, setValue];
}
