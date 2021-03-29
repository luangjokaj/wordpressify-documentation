import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Burger } from "../Layout/Burger";
import { DropDown } from "../../assets/svg/DropDown";
import { navigationData } from "./navigation-data";
import { sidebarStyles } from "./Sidebar.styles";

function Sidebar({ className }) {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [activeMenus, setActiveMenus] = useState([
		"start",
		"customization",
		"build-utilities",
		"production",
		"other",
	]);
	const router = useRouter();

	return (
		<>
			<Burger
				isOpen={isMenuOpen}
				onClick={() => setMenuOpen(!isMenuOpen)}
			/>
			<div
				className={className}
				css={(theme) => sidebarStyles(theme, isMenuOpen)}
			>
				<ul>
					{navigationData.map((item) => (
						<li key={item.label}>
							<button
								className={
									activeMenus.includes(item.state)
										? "active"
										: ""
								}
								onClick={() => {
									if (activeMenus.includes(item.state)) {
										const newState = activeMenus.filter(
											(localItem) =>
												localItem !== item.state,
										);
										setActiveMenus(newState);
									} else {
										setActiveMenus((oldState) => [
											...oldState,
											item.state,
										]);
									}
								}}
							>
								<strong>{item.label}</strong> <DropDown />
							</button>
							{item.children && (
								<ul
									className={
										activeMenus.includes(item.state)
											? "active"
											: ""
									}
								>
									{item.children.map(
										(childItem) =>
											childItem.href && (
												<li key={childItem.href}>
													<Link
														href={childItem.href}
														as={childItem.href}
													>
														<a
															href={
																childItem.href
															}
															className={
																router.pathname ===
																childItem.href
																	? "active"
																	: ""
															}
														>
															{childItem.label}
														</a>
													</Link>
												</li>
											),
									)}
									{item.children.map(
										(childItem) =>
											!childItem.href && (
												<li key={childItem.label}>
													<button
														className={
															activeMenus.includes(
																childItem.state,
															)
																? "active"
																: ""
														}
														onClick={() => {
															if (
																activeMenus.includes(
																	childItem.state,
																)
															) {
																const newState = activeMenus.filter(
																	(
																		localItem,
																	) =>
																		localItem !==
																		childItem.state,
																);
																setActiveMenus(
																	newState,
																);
															} else {
																setActiveMenus(
																	(
																		oldState,
																	) => [
																		...oldState,
																		childItem.state,
																	],
																);
															}
														}}
													>
														<strong>
															{childItem.label}
														</strong>{" "}
														<DropDown />
													</button>
													{childItem.children && (
														<ul
															className={
																activeMenus.includes(
																	childItem.state,
																)
																	? "active"
																	: ""
															}
														>
															{childItem.children.map(
																(subItem) => (
																	<li
																		key={
																			subItem.href
																		}
																	>
																		<Link
																			href={
																				subItem.href
																			}
																			as={
																				subItem.href
																			}
																		>
																			<a
																				href={
																					subItem.href
																				}
																				onClick={() =>
																					setMenuOpen(
																						false,
																					)
																				}
																				className={
																					router.pathname ===
																					subItem.href
																						? "active"
																						: ""
																				}
																			>
																				{
																					subItem.label
																				}
																			</a>
																		</Link>
																	</li>
																),
															)}
														</ul>
													)}
												</li>
											),
									)}
								</ul>
							)}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export { Sidebar };
