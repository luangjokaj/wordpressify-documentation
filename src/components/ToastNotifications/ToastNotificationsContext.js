import { createContext, useState } from "react";

const ToastNotificationsContext = createContext({
	notifications: [],
	addNotification: () => null,
	removeNotification: () => null,
});

const color = (config) => config?.color || "info";

function ToastNotificationsProvider({ children }) {
	const [notifications, setToastNotifications] = useState([]);

	const addNotification = (text, config) => {
		setToastNotifications((prevState) => [
			...prevState,
			{
				text,
				status: "hidden",
				color: color(config),
				autoHide: config.autoHide,
			},
		]);
		setTimeout(() => {
			setToastNotifications([
				...notifications,
				{
					text,
					status: "visible",
					color: color(config),
					autoHide: config.autoHide,
				},
			]);
		}, 300);
	};

	const removeNotification = (notification) => {
		const updatedNotification = notifications.filter(
			(t) => t.text !== notification.text,
		);
		setToastNotifications([
			...updatedNotification,
			{
				text: notification.text,
				status: "hidden",
				color: notification.color,
				autoHide: notification.autoHide,
			},
		]);
		setTimeout(() => {
			setToastNotifications(updatedNotification);
		}, 300);
	};

	return (
		<ToastNotificationsContext.Provider
			value={{ notifications, addNotification, removeNotification }}
		>
			{children}
		</ToastNotificationsContext.Provider>
	);
}

export { ToastNotificationsContext, ToastNotificationsProvider };
