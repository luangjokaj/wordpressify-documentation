import React from "react";
import { buttonStyles } from "./Button.styles";

function Button({
	className,
	children,
	variant = "primary",
	size = "default",
	frame,
	fullWidth,
	...props
}) {
	return (
		<button
			className={className}
			css={(theme) =>
				buttonStyles(
					theme,
					variant,
					size,
					frame,
					props.disabled,
					fullWidth,
				)
			}
			{...props}
		>
			{children}
		</button>
	);
}

export { Button };
