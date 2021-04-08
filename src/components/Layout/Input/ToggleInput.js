import React from "react";
import { ToggleInput as CherryToggleInput } from "cherry-components";
import { useTheme } from "@emotion/react";

function ToggleInput({
	className,
	size = "default",
	success,
	error,
	label,
	type = "checkbox",
	fullWidth,
	variant = "primary",
	...props
}) {
	const theme = useTheme();
	return (
		<CherryToggleInput
			className={className}
			size={size}
			success={success}
			error={error}
			label={label}
			type={type}
			fullWidth={fullWidth}
			variant={variant}
			theme={theme}
			{...props}
		/>
	);
}

export { ToggleInput };
