import { useEffect } from "react";

export function useOnClickOutside(refs, cb) {
	useEffect(() => {
		function handleClickOutside(event) {
			if (
				refs &&
				refs
					.map(
						(ref) =>
							ref &&
							ref.current &&
							ref.current.contains(event.target),
					)
					.every((i) => i === false)
			) {
				cb();
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [refs, cb]);
}
