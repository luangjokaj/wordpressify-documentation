import { css } from "@emotion/react";

export const flexStyles = (theme, inline, justifyContent) => css`
	display: flex;

	${justifyContent &&
	css`
		justify-content: ${justifyContent};
	`}

	${inline &&
	css`
		display: inline-flex;
	`}
`;
