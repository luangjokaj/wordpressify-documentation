import { css } from "@emotion/react";
import { darken, lighten } from "polished";
import { resetListStyles } from "../../assets/styles/helperStyles";
import { Breakpoints, mq } from "../../assets/styles/mq";

export const socialStyles = (theme) => css`
	& .socials-list {
		${resetListStyles};
		display: flex;
		flex-wrap: wrap;
		margin: 0 -10px;
		width: calc(100% + 20px);

		${mq(Breakpoints.lg)} {
			width: calc(100% + 40px);
			margin: 0 -20px;
		}

		& em {
			font-style: normal;
		}

		& li {
			text-align: center;
			margin: 10px;

			${mq(Breakpoints.lg)} {
				margin: 20px;
			}

			& .label {
				display: block;
				margin: 10px auto auto auto;
				font-size: ${theme.sizes.button.size.desktop};
				color: ${theme.colors.grayDark};
			}

			&.rounded {
				& .profile,
				& .product {
					display: block;
					margin: auto;
					width: 52px;
					height: 52px;
					border-radius: 50%;
					box-shadow: inset 0 0 0 2px ${theme.colors.primary};
					position: relative;

					& img {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						border-radius: 50%;
					}

					& > span,
					& > div,
					& svg {
						position: absolute !important;
						width: 100% !important;
						height: 100% !important;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);

						& img,
						& svg {
							border-radius: 50%;
							padding: 6px !important;
						}
					}

					& svg {
						height: 24px;
						width: auto;
					}
				}

				& .product {
					& span {
						display: block;
						border: solid 1px ${theme.colors.grayLight};
						position: absolute !important;
						width: calc(100% - 12px) !important;
						height: calc(100% - 12px) !important;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						padding: 6px;
						border-radius: 50%;

						${theme.isDark &&
						css`
							background: ${theme.colors.dark};
						`}
					}
				}
			}

			& .icon-link {
				& .label {
					font-weight: 700;
					color: ${theme.colors.dark};
					transition: all 0.3s ease;
				}

				& span {
					width: 52px;
					height: 52px;
					border-radius: 12px;
					background: ${theme.colors.dark};
					display: flex;
					margin: auto;
					transition: all 0.3s ease;

					& svg {
						margin: auto;
					}
				}

				&:not(.figma) {
					& span {
						& svg {
							& path {
								fill: ${theme.colors.light};
							}
						}
					}
				}

				@media (hover: hover) {
					&:hover {
						& .label {
							color: ${theme.colors.primary};
						}

						& span {
							background: ${lighten(0.25, theme.colors.dark)};
						}
					}
				}

				&.twitter {
					& span {
						background: #1da1f2;
					}

					@media (hover: hover) {
						&:hover {
							& span {
								background: ${darken(0.1, "#1da1f2")};
							}
						}
					}
				}

				&.dribbble {
					& span {
						background: #ea4c89;
					}

					@media (hover: hover) {
						&:hover {
							& span {
								background: ${darken(0.1, "#ea4c89")};
							}
						}
					}
				}

				&.discord {
					& span {
						background: #7289da;
					}

					@media (hover: hover) {
						&:hover {
							& span {
								background: ${darken(0.2, "#7289da")};
							}
						}
					}
				}
			}
		}
	}
`;

export const rightFlextyles = (theme) => css`
	${mq(Breakpoints.lg)} {
		display: flex;
	}
`;

export const rightSideStyles = (theme) => css`
	margin: auto 0 auto auto;
`;
