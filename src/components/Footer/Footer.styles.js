import { css } from "@emotion/react";
import { rgba } from "polished";
import { resetListStyles } from "../../assets/styles/helperStyles";
import { Breakpoints, mq } from "../../assets/styles/mq";

export const footerStyles = (theme) => css`
	text-align: center;

	${theme.isDark
		? css`
				background: ${rgba(theme.colors.dark, 0.05)};
		  `
		: css`
				background: ${rgba(theme.colors.grayLight, 0.3)};
		  `}

	${mq(Breakpoints.lg)} {
		text-align: left;
	}

	& .left-col {
		& .icon-link {
			display: inline-block;
			margin-right: 20px;
		}

		& a:not(.icon-link) {
			font-weight: 600;
		}
	}

	& .right-col {
		${mq(Breakpoints.lg)} {
			text-align: right;
		}
	}

	& .first-row {
		& a {
			color: ${theme.colors.primary};
			font-weight: 600;
			margin: 10px 0;

			& svg {
				vertical-align: middle;
				transform: translateY(-1px);
				margin-right: 5px;

				& path {
					fill: ${theme.colors.dark};
				}
			}

			@media (hover: hover) {
				&:hover {
					color: ${theme.colors.primaryDark};
				}
			}

			&.github-stars {
				& span,
				& small {
					vertical-align: middle;
				}

				& small {
					font-size: ${theme.sizes.small.mobile};
					display: inline-block;
					margin: 0 0 0 2px;
					padding: 0 0 0 7px;
					line-height: 1;
					border-left: solid 1px ${theme.colors.gray};
					transform: translateY(1px);
					opacity: 0.5;
					transition: all 0.3s ease;

					${mq(Breakpoints.lg)} {
						font-size: ${theme.sizes.small.mobile};
						line-height: 1;
					}
				}

				& .star {
					margin: 0 0 0 2px;
					& path {
						fill: none;
					}
				}

				@media (hover: hover) {
					&:hover {
						& small {
							opacity: 0.8;
						}

						& .star {
							& path {
								stroke: ${theme.colors.primaryDark};
							}
						}
					}
				}
			}
		}

		& ul {
			${resetListStyles};
			display: flex;
			margin: 20px -10px -10px;
			width: calc(100% + 20px);
			justify-content: center;
			flex-wrap: wrap;

			${mq(Breakpoints.lg)} {
				justify-content: flex-end;
				margin: 0 -10px;
			}

			& li {
				& a {
					display: inline-block;
					margin: 5px 10px;

					${mq(Breakpoints.lg)} {
						margin: 0 10px;
					}
				}
			}
		}
	}
`;
