import React from "react";
import { fontStyles } from "./FontStyle.styles";

function FontStyle({ id, className, children, variant, ...props }) {
	return (
		<span
			id={id}
			className={className}
			css={(theme) => fontStyles(theme, variant)}
			{...props}
		>
			{children}
		</span>
	);
}

export { FontStyle };
