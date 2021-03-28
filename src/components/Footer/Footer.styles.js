import { css } from "@emotion/react";
import { rgba } from "polished";
import { resetListStyles } from "../../assets/styles/helperStyles";
import { Breakpoints, mq } from "../../assets/styles/mq";

export const footerStyles = (theme) => css`
	background: ${rgba(theme.colors.grayLight, 0.3)};
	text-align: center;

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
				transform: translateY(-2px);
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
					margin: 10px;
				}
			}
		}
	}
`;
