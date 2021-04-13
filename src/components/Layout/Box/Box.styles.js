import { css } from "@emotion/react";
import {
	shadowHoverStyles,
	shadowStyles,
} from "../../../assets/styles/helperStyles";
import { Breakpoints, mq } from "../../../assets/styles/mq";

export const boxStyles = (theme, isLink, noPadding, isVideo) => css`
	line-height: 0;
	border-radius: 12px;
	${shadowStyles(theme)};
	overflow: hidden;

	${noPadding
		? css`
				padding: 0;
		  `
		: css`
				padding: 20px;
		  `}

	${isVideo &&
	css`
		padding-top: 56.25%;
		position: relative;
	`}

	${isLink &&
	css`
		display: block;

		@media (hover: hover) {
			&:hover {
				${shadowHoverStyles(theme)};

				& .primary {
					color: ${theme.colors.primaryDark};
				}

				& .secondary {
					color: ${theme.colors.secondaryDark};
				}

				& .tertiary {
					color: ${theme.colors.tertiaryDark};
				}
			}
		}
	`}

	& .primary,
	& .secondary,
	& .tertiary {
		display: block;
		padding: 30px 20px 10px;
		transition: all 0.3s ease;
		font-size: ${theme.sizes.buttonBig.size.mobile};
		white-space: nowrap;
		text-overflow: ellipsis;
		hyphens: auto;
		overflow: hidden;

		${mq(Breakpoints.lg)} {
			font-size: ${theme.sizes.buttonBig.size.desktop};
		}
	}

	& .primary {
		display: block;
		color: ${theme.colors.primary};
	}

	& .secondary {
		display: block;
		color: ${theme.colors.secondary};
	}

	& .tertiary {
		display: block;
		color: ${theme.colors.tertiary};
	}

	& .video {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		overflow: hidden;
		border-radius: 12px;
	}
`;
