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

	& a {
		${theme.isDark
			? css`
					color: ${theme.colors.dark};
			  `
			: css`
					color: ${theme.colors.primary};
			  `}

		@media (hover: hover) {
			&:hover {
				${theme.isDark
					? css`
							color: ${theme.colors.primaryLight};
					  `
					: css`
							color: ${theme.colors.primaryDark};
					  `}
			}
		}
	}

	& .first-row {
		& a {
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

			&.github-stars {
				& span,
				& small {
					vertical-align: middle;
				}

				& small {
					display: inline-block;
					margin: 0 0 0 2px;
					padding: 0 0 0 7px;
					line-height: 1;
					border-left: solid 1px ${theme.colors.gray};
					transform: translateY(1px);
					transition: all 0.3s ease;
					color: ${theme.colors.primary};
					opacity: 0.5;

					${mq(Breakpoints.lg)} {
						line-height: 1;
					}
				}

				& .star {
					margin: 0 0 0 2px;

					& path {
						fill: none;
						${theme.isDark
							? css`
									stroke: ${theme.colors.primaryLight};
							  `
							: css`
									stroke: ${theme.colors.primary};
							  `}
					}
				}

				@media (hover: hover) {
					&:hover {
						& small {
							opacity: 8;

							${theme.isDark
								? css`
										color: ${theme.colors.primaryLight};
								  `
								: css`
										color: ${theme.colors.primaryDark};
								  `}
						}

						& .star {
							& path {
								${theme.isDark
									? css`
											stroke: ${theme.colors
												.primaryLight};
									  `
									: css`
											stroke: ${theme.colors.primaryDark};
									  `}
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
