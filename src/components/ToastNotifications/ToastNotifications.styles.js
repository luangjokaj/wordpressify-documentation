import { css, keyframes } from "@emotion/react";
import { rgba } from "polished";
import {
	resetButtonStyles,
	shadowStyles,
} from "../../assets/styles/helperStyles";

export const notificationsStyles = (theme) => css`
	position: fixed;
	top: 8px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 99999;
	margin: 0;
	padding: 0;
	list-style: none;

	& li {
		justify-content: center;
		display: flex;
		margin: 10px 0;
		transition: all 0.3s ease;
		opacity: 0;
		pointer-events: none;
		transform: translateY(-20px);

		& .item {
			display: inline-flex;
			background: ${theme.colors.info};
			border-radius: 6px;
			margin: 0;
			${shadowStyles(theme)};
			${theme.isDark
				? css`
						color: ${theme.colors.dark};
				  `
				: css`
						color: ${theme.colors.light};
				  `}

			& span {
				display: inline-flex;
				padding: 8px 0 8px 12px;
			}

			& .close-button {
				${resetButtonStyles};
				margin: auto 0 auto 10px;
				padding: 14px 12px;
				display: inline-flex;
				background: ${rgba(theme.colors.light, 0)};
				transition: all 0.3s ease;
				max-width: 40px;
				width: 40px;

				${theme.isDark
					? css`
							border-left: solid 1px
								${rgba(theme.colors.dark, 0.3)};
					  `
					: css`
							border-left: solid 1px
								${rgba(theme.colors.light, 0.3)};
					  `}

				& svg {
					width: 12px;
					height: auto;
					opacity: 1;
				}

				& * {
					margin: auto;
				}

				@media (hover: hover) {
					&:hover {
						background: ${rgba(theme.colors.light, 0.1)};
					}
				}
			}
		}

		&.error {
			& .item {
				background: ${theme.colors.error};
			}
		}

		&.success {
			& .item {
				background: ${theme.colors.success};
			}
		}

		&.visible {
			opacity: 1;
			pointer-events: all;
			transform: translateY(0);
		}

		&.hidden {
			opacity: 0;
			pointer-events: none;
			transform: translateY(-20px);
		}
	}
`;

const animation = keyframes`
	0% {
		max-height: 100%;
	}

	100% {
		max-height: 0;
	}
`;
