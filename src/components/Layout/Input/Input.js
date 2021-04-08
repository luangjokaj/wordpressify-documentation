import React from "react";
import { Input as CherryInput } from "cherry-components";
import { useTheme } from "@emotion/react";

function Input({
	className,
	size = "default",
	type = "text",
	success,
	error,
	label,
	fullWidth,
	variant = "primary",
	...props
}) {
	const theme = useTheme();
	return (
		<CherryInput
			className={className}
			size={size}
			type={type}
			success={success}
			error={error}
			label={label}
			fullWidth={fullWidth}
			variant={variant}
			theme={theme}
			{...props}
		/>
	);
}

export { Input };
