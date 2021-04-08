import React from "react";
import { Select as CherrySelect } from "cherry-components";
import { useTheme } from "@emotion/react";

function Select({
	className,
	children,
	size = "default",
	error,
	success,
	fullWidth,
	label,
	...props
}) {
	const theme = useTheme();
	return (
		<CherrySelect
			className={className}
			size={size}
			error={error}
			success={success}
			fullWidth={fullWidth}
			label={label}
			theme={theme}
			{...props}
		>
			{children}
		</CherrySelect>
	);
}

export { Select };
