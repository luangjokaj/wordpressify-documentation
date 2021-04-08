import React from "react";
import { TableOverflow as CherryTableOverflow } from "cherry-components";
import { useTheme } from "@emotion/react";

function TableOverflow({ className, children }) {
	const theme = useTheme();
	return (
		<CherryTableOverflow className={className} theme={theme}>
			{children}
		</CherryTableOverflow>
	);
}

export { TableOverflow };
