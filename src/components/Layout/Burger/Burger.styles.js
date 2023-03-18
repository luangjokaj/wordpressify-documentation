import { css } from "@emotion/react";
import {
	resetButtonStyles,
	shadowStyles,
} from "../../../assets/styles/helperStyles";
import { Breakpoints, mq } from "../../../assets/styles/mq";

export const burgerStyles = (theme, isOpen) => css`
	${resetButtonStyles};
	margin: auto;
	width: 46px;
	height: 46px;
	position: relative;
	cursor: pointer;
	overflow: hidden;

	position: fixed;
	z-index: 9999;
	bottom: 20px;
	right: 20px;
	border-radius: 50%;
	background: ${theme.isDark ? theme.colors.dark : theme.colors.primary};
	${shadowStyles(theme)};

	${mq(Breakpoints.lg)} {
		display: none;
	}

	& span {
		display: block;
		width: 24px;
		height: 2px;
		background: ${theme.isDark ? theme.colors.primary : theme.colors.light};
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate3d(0, 0, 0) translate(-50%, -50%);
		transition: all 0.3s ease;

		&:before,
		&:after {
			content: "";
			display: block;
			height: 2px;
			width: 24px;
			background: ${theme.isDark
				? theme.colors.primary
				: theme.colors.light};
			position: absolute;
			transition: all 0.3s ease;
		}

		&:before {
			top: -10px;
		}

		&:after {
			top: 10px;
		}
	}

	${isOpen &&
	css`
		& span {
			width: 0;

			&:before {
				transform: translate3d(0, 0, 0) translate(-12px, 11px)
					rotate(45deg);
				transition-delay: 0.3s;
			}

			&:after {
				transform: translate3d(0, 0, 0) translate(-12px, -9px)
					rotate(-45deg);
				transition-delay: 0.4s;
			}
		}
	`}
`;
