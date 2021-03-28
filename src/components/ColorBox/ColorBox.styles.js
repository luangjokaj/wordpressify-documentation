import { css } from "@emotion/react";
import { shadowStyles } from "../../assets/styles/helperStyles";
import { Breakpoints, mq } from "../../assets/styles/mq";

export const colorBoxStyles = (theme, value, border) => css`
	display: flex;
	justify-content: space-between;
	${shadowStyles};
	border-radius: 30px;
	padding: 24px;

	${mq(Breakpoints.lg)} {
		display: inline-flex;
	}

	& .swatch {
		background: ${value};
		border-radius: 14px;
		width: 96px;
		height: 48px;
		margin-right: 20px;

		${border &&
		css`
			border: solid 1px ${theme.colors.grayLight};
		`}
	}

	& .color-info {
		flex: 1;
		font-size: ${theme.sizes.buttonBig.size.mobile};
		color: ${theme.colors.gray};
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;

		${mq(Breakpoints.lg)} {
			font-size: ${theme.sizes.buttonBig.size.desktop};
		}

		& strong,
		& em {
			font-style: normal;
			display: block;
		}

		& em {
			font-size: ${theme.sizes.input.size.mobile};

			${mq(Breakpoints.lg)} {
				font-size: ${theme.sizes.input.size.desktop};
			}
		}
	}
`;

export const colorBoxContainerStyles = (theme, isPushing) => css`
	${isPushing
		? css`
				margin: 0 -10px;
		  `
		: css`
				margin: -20px -10px;

				${mq(Breakpoints.lg)} {
					margin: -10px;
				}
		  `}

	& .color-box {
		margin: 20px 10px;

		${mq(Breakpoints.lg)} {
			margin: 10px;
		}
	}
`;
