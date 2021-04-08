import React from "react";
import { FontStyle as CherryFontStyle } from "cherry-components";
import { useTheme } from "@emotion/react";

function FontStyle({ id, className, children, variant, ...props }) {
	const theme = useTheme();
	return (
		<CherryFontStyle
			id={id}
			className={className}
			variant={variant}
			theme={theme}
			{...props}
		>
			{children}
		</CherryFontStyle>
	);
}

export { FontStyle };
