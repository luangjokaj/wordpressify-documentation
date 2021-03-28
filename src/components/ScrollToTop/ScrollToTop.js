import React, { useEffect } from "react";

function ScrollToTop({ children }) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [children]);

	return children;
}

export { ScrollToTop };
