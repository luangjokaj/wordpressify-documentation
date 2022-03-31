import { useRouter } from "next/router";
import React, { useEffect } from "react";

function ScrollToTop({ children }) {
	const router = useRouter();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [router]);

	return children;
}

export { ScrollToTop };
