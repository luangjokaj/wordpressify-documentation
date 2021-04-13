import React from "react";
import { useTheme } from "@emotion/react";

function ArrowTail() {
	const theme = useTheme();
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8.375 3.5L12.875 8L8.375 12.5M12.25 8H3.125"
				stroke="black"
				strokeLinecap="round"
				strokeLinejoin="round"
				stroke={theme.isDark ? "#fff" : "#000"}
			/>
		</svg>
	);
}

export { ArrowTail };
