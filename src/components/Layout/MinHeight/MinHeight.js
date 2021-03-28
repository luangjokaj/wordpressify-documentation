import React from "react";
import { minHeightStyles } from "./MinHeight.styles";

function MinHeight({ className, children }) {
	return (
		<div className={className} css={(theme) => minHeightStyles(theme)}>
			{children}
		</div>
	);
}

export { MinHeight };
