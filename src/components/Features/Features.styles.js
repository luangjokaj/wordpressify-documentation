import { css } from "@emotion/react";

export const featuresStyles = (theme) => css`
	& strong {
		display: block;
		margin: 10px 0 0 0;

		${theme.isDark
			? css`
					color: ${theme.colors.dark};
			  `
			: css`
					color: ${theme.colors.primary};
			  `}
	}
`;
