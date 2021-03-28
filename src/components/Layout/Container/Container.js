import React from "react";
import { containerStyles } from "./Container.styles";

function Container({ children, fluid, className, textAlign, id }) {
	return (
		<div
			css={(theme) => containerStyles(theme, fluid, textAlign)}
			className={className}
			data-container
			id={id}
		>
			{children}
		</div>
	);
}

export { Container };
