import React from "react";
import { tableOverflowStyles } from "./TableOverflow.styles";

function TableOverflow({ className, children }) {
	return (
		<div className={className} css={(theme) => tableOverflowStyles(theme)}>
			{children}
		</div>
	);
}

export { TableOverflow };
