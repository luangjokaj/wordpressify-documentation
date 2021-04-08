import React from "react";
import { MinHeight as CherryMinHeight } from "cherry-components";
import { useTheme } from "@emotion/react";

function MinHeight({ className, children }) {
	const theme = useTheme();
	return (
		<CherryMinHeight className={className} theme={theme}>
			{children}
		</CherryMinHeight>
	);
}

export { MinHeight };
