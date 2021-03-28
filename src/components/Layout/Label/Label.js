import React from "react";
import { labelStyles } from "./Label.styles";

function Label({ className, children, error, success, htmlFor, ...props }) {
	return (
		<label
			className={className}
			css={(theme) => labelStyles(theme, error, success)}
			htmlFor={htmlFor}
			{...props}
		>
			{children}
		</label>
	);
}

export { Label };
