import React from "react";
import { Button as CherryButton } from "cherry-components";
import { useTheme } from "@emotion/react";

function Button({
	className,
	children,
	variant = "primary",
	size = "default",
	frame,
	fullWidth,
	...props
}) {
	const theme = useTheme();
	return (
		<CherryButton
			className={className}
			variant={variant}
			size={size}
			frame={frame}
			fullWidth={fullWidth}
			theme={theme}
			{...props}
		>
			{children}
		</CherryButton>
	);
}

export { Button };
