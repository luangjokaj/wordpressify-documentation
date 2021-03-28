import { css } from "@emotion/react";

export const boxDescriptionStyles = (theme) => css`
	border: solid 1px ${theme.colors.gray};
	border-bottom-left-radius: 12px;
	border-bottom-right-radius: 12px;
	overflow: hidden;
	margin-top: -16px;
	padding: 30px 20px 20px 20px;

	& p:only-of-type {
		padding: 0;
		margin: 0;
	}

	& blockquote {
		padding: 0;
		margin: 0;
	}
`;
