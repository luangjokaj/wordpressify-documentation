import { css, keyframes } from "@emotion/react";
import { resetListStyles } from "../../assets/styles/helperStyles";
import { Breakpoints, mq } from "../../assets/styles/mq";

export const headerStyles = (theme, isLoaded) => css`
	position: fixed;
	top: 0;
	left: 0;
	background: ${theme.colors.light};
	width: 100%;
	z-index: 9999;
	display: flex;
	transition: all 1s ease;
	height: 100vh;
	transition-delay: 1s;

	${isLoaded &&
	css`
		height: ${theme.spacing.paddingTopBody.mobile};

		${mq(Breakpoints.lg)} {
			height: ${theme.spacing.paddingTopBody.desktop};
		}
	`}

	& .container {
		margin: auto;
	}

	& .inner-wrapper {
		padding: 25px 0;
		display: flex;
		justify-content: flex-end;
		border-bottom: solid 1px ${theme.colors.grayLight};
		position: relative;

		&:before {
			content: "";
			display: block;
			position: absolute;
			left: 50%;
			transform: translate3d(0, 0, 0) translateX(-50%) scaleX(0) scaleY(1);
			background: ${theme.colors.primary};
			z-index: 9999;
			height: 5px;
			width: 100%;
			bottom: -4px;
			transition: all 0.3s ease;
			opacity: 1;

			${isLoaded &&
			css`
				transform: translate3d(0, 0, 0) translateX(-50%) scaleX(1)
					scaleY(1);
				animation: ${animation} forwards 1 2s;
			`}
		}

		& .logo {
			position: absolute;
			left: 0;
			top: 50%;
			transform: translate3d(0, 0, 0) translateY(-50%);
			transition: all 1s ease;
			transition-delay: 0.5s;
			display: flex;
			width: 100%;
			justify-content: center;

			${isLoaded &&
			css`
				width: 270px;
			`}

			& svg {
				display: inline-flex;
			}
		}

		& a {
			display: inline-flex;
		}

		& ul {
			${resetListStyles};
			margin: auto -10px auto 0;
			padding: 0;
			display: flex;

			& li {
				display: flex;
				transition: all 0.3s ease;
				transform: translate3d(0, 0, 0) translateY(-40px);
				opacity: 0;

				${isLoaded &&
				css`
					transform: translate3d(0, 0, 0) translateY(0);
					opacity: 1;
				`}

				&:nth-of-type(1) {
					transition-delay: 1s;
				}

				&:nth-of-type(2) {
					transition-delay: 1.1s;
				}

				& a {
					margin: auto 0;
					padding: 0 10px;
					font-weight: 600;
					font-size: ${theme.sizes.button.size.mobile};
					line-height: ${theme.sizes.button.lineheight.mobile};

					${mq(Breakpoints.lg)} {
						font-size: ${theme.sizes.button.size.desktop};
						line-height: ${theme.sizes.button.lineheight.desktop};
					}

					&.github {
						& svg {
							opacity: 0.5;

							@media (hover: hover) {
								&:hover {
									opacity: 1;
								}
							}
						}
					}

					& .mobile {
						${mq(Breakpoints.lg)} {
							display: none;
						}
					}

					& .desktop {
						display: none;

						${mq(Breakpoints.lg)} {
							display: initial;
						}
					}
				}
			}
		}
	}
`;

const animation = keyframes`
	0% {
		transform: translate3d(0,0,0) translateX(-50%) scaleX(0) scaleY(1);
	}

	100% {
		transform: translate3d(0,0,0) translateX(-50%) scaleX(1) scaleY(0);
	}
`;
