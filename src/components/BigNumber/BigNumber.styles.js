import { css } from "@emotion/react";
import { Breakpoints, mq } from "../../assets/styles/mq";

export const bigNumberStyles = (theme, color) => css`
	display: inline-block;
	vertical-align: baseline;
	font-size: ${theme.sizes.hero1.size.mobile};
	line-height: ${theme.sizes.hero1.lineheight.mobile};
	padding-right: 10px;

	${color === "primary" &&
	css`
		color: ${theme.colors.primary};
	`}

	${color === "secondary" &&
	css`
		color: ${theme.colors.secondary};
	`}

	${color === "tertiary" &&
	css`
		color: ${theme.colors.tertiary};
	`}

	${mq(Breakpoints.lg)} {
		font-size: ${theme.sizes.hero1.size.desktop};
		line-height: ${theme.sizes.hero1.lineheight.desktop};
	}
`;
