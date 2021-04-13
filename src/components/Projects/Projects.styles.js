import { css } from "@emotion/react";
import { darken, lighten, rgba } from "polished";
import { Breakpoints, mq } from "../../assets/styles/mq";

export const projectStyles = (theme) => css`
	display: flex;
	flex-wrap: wrap;
	overflow: 100%;

	& a {
		min-height: 350px;
		display: flex;
		width: 100%;
		padding: 20px;

		${mq(Breakpoints.lg)} {
			width: 50%;
			max-width: 50%;
			flex: 50%;
		}

		& span {
			display: block;
			margin: auto;
			text-align: center;
			transition: all 0.3s ease;
			transform: translate3d(0, 0, 0) scale(1);
		}

		& p {
			${theme.isDark
				? css`
						color: ${rgba(theme.colors.dark, 0.5)};
				  `
				: css`
						color: ${theme.colors.light};
				  `}
		}

		@media (hover: hover) {
			&:hover {
				& span {
					transform: translate3d(0, 0, 0) scale(1.03);
				}
			}
		}

		&:active {
			& span {
				transform: translate3d(0, 0, 0) scale(0.97);
			}
		}

		&.cherry {
			background: #f43f5e;

			@media (hover: hover) {
				&:hover {
					background: ${lighten(0.1, "#F43F5E")};
				}
			}
		}

		&.gopablo {
			background: #303030;

			@media (hover: hover) {
				&:hover {
					background: ${darken(0.1, "#303030")};
				}
			}
		}

		&.nextify {
			background: #0370f3;

			@media (hover: hover) {
				&:hover {
					background: ${darken(0.1, "#0370F3")};
				}
			}
		}

		&.fuzzymail {
			background: #59c8d0;

			@media (hover: hover) {
				&:hover {
					background: ${darken(0.1, "#59C8D0")};
				}
			}
		}
	}
`;
