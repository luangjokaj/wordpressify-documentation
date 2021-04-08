import React from "react";
import { Label as CherryLabel } from "cherry-components";

function Label({
	className,
	children,
	error,
	success,
	fullWidth,
	htmlFor,
	...props
}) {
	return (
		<CherryLabel
			className={className}
			error={error}
			success={success}
			fullWidth={fullWidth}
			htmlFor={htmlFor}
			{...props}
		>
			{children}
		</CherryLabel>
	);
}

export { Label };
