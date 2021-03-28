import { css } from "@emotion/react";
import { rgba } from "polished";
import {
	resetButtonStyles,
	resetListStyles,
} from "../../assets/styles/helperStyles";
import { Breakpoints, mq } from "../../assets/styles/mq";

export const sidebarStyles = (theme, isMenuOpen) => css`
	left: 0;
	top: 0;
	width: 100%;
	transition: all 0.3s ease;

	position: fixed;
	top: ${theme.spacing.paddingTopBody.mobile};
	height: calc(100vh - ${theme.spacing.paddingTopBody.mobile});
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
	background: ${theme.colors.light};
	z-index: 999;
	opacity: 0;
	transform: translate3d(0, 0, 0) translateX(60px);
	pointer-events: none;
	padding-right: 20px;

	${isMenuOpen &&
	css`
		opacity: 1;
		transform: translate3d(0, 0, 0) translateX(0);
		pointer-events: all;
	`}

	${mq(Breakpoints.lg)} {
		position: static;
		top: initial;
		height: initial;
		overflow-y: hidden;
		background: ${theme.colors.light};
		transform: translate3d(0, 0, 0) translateX(0);
		opacity: 1;
		pointer-events: all;
		padding-right: 0;
	}

	& ul {
		${resetListStyles};
		padding: 0 0 20px 20px;

		${mq(Breakpoints.lg)} {
			padding: 30px 0 40px 20px;
		}

		& li {
			& strong,
			& a {
				display: inline-block;
			}

			& button {
				${resetButtonStyles};

				& svg {
					margin-left: 3px;
					transform: translate3d(0, 0, 0) translateX(-1px)
						rotate(0deg);
				}

				&.active {
					& svg {
						transform: translate3d(0, 0, 0) translateX(-1px)
							rotate(180deg);
					}
				}
			}

			& strong {
				font-weight: 600;
				padding: 20px 0 5px;
			}

			& a {
				padding: 5px;
				width: 100%;

				&.active {
					background: ${rgba(theme.colors.grayLight, 0.5)};
					border-radius: 6px;
					font-weight: 500;
					color: ${theme.colors.dark};

					@media (hover: hover) {
						&:hover {
							color: ${theme.colors.primary};
						}
					}
				}
			}

			& ul {
				padding: 0 0 0 20px;
				transition: all 0.3s ease;
				max-height: 0;
				overflow: hidden;
				pointer-events: none;
				opacity: 0;

				&.active {
					max-height: 2000px;
					pointer-events: all;
					opacity: 1;
				}

				& strong {
					padding: 5px;
				}
			}
		}
	}
`;
