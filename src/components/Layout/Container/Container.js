import React from "react";
import { Container as CherryContainer } from "cherry-components";
import { useTheme } from "@emotion/react";

function Container({ children, fluid, className, textAlign, id }) {
	const theme = useTheme();
	return (
		<CherryContainer
			fluid={fluid}
			className={className}
			textAlign={textAlign}
			id={id}
			theme={theme}
		>
			{children}
		</CherryContainer>
	);
}

export { Container };
