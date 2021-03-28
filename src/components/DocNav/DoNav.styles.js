import { css } from "@emotion/react";
import { Breakpoints, mq } from "../../assets/styles/mq";

export const docNavStyles = (theme, next, prev) => css`
	vertical-align: middle;
	margin: 10px;

	& span {
		display: inline-block;
		transition: all 0.3s ease;
		padding: 0;
		color: ${theme.colors.dark};
	}

	& svg {
		vertical-align: middle;

		${prev &&
		css`
			transform: translate3d(0, 0, 0) rotate(180deg) translateX(10px)
				translateY(1px);
		`}

		${next &&
		css`
			transform: translate3d(0, 0, 0) translateX(10px) translateY(-1px);
		`}
	}

	@media (hover: hover) {
		&:hover {
			& span {
				color: ${theme.colors.primary};
			}

			& svg {
				& path {
					stroke: ${theme.colors.primary};
				}

				${prev &&
				css`
					transform: translate3d(0, 0, 0) rotate(180deg)
						translateX(5px) translateY(1px);
				`}

				${next &&
				css`
					transform: translate3d(0, 0, 0) translateX(5px)
						translateY(-1px);
				`}
			}
		}
	}

	&:active {
		& svg {
			& path {
				stroke: ${theme.colors.primary};
			}

			${prev &&
			css`
				transform: translate3d(0, 0, 0) rotate(180deg) translateX(2px)
					translateY(1px);
			`}

			${next &&
			css`
				transform: translate3d(0, 0, 0) translateX(2px) translateY(-1px);
			`}
		}
	}
`;

export const docNavWrapperStyles = (theme, noTop) => css`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	border-top: solid 1px ${theme.colors.grayLight};
	padding: 10px 0;

	${noTop &&
	css`
		margin-top: -10px;
		padding-top: 0;
		border-top: none;
	`}
`;
