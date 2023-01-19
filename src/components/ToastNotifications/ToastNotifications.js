import { useContext, useRef } from "react";
import { ToastNotificationsContext } from "./ToastNotificationsContext";
import * as styles from "./ToastNotifications.styles";
import { Close } from "../../assets/svg/Close";

function ToastNotifications() {
	const { notifications, removeNotification } = useContext(
		ToastNotificationsContext,
	);

	return (
		<ul css={(theme) => styles.notificationsStyles(theme)}>
			{notifications.map((notification, i) => (
				<NotificationItem key={i} {...notification} />
			))}
		</ul>
	);
}

function NotificationItem(notification) {
	const { removeNotification } = useContext(ToastNotificationsContext);
	const elmRef = useRef();
	if (notification.autoHide) {
		setTimeout(() => {
			elmRef.current?.click();
		}, notification.autoHide);
	}
	return (
		<li className={`${notification.status} ${notification.color}`}>
			<span className="item">
				<span>{notification.text}</span>
				<button
					className="close-button"
					onClick={() => {
						removeNotification(notification);
					}}
					ref={elmRef}
				>
					<Close />
				</button>
			</span>
		</li>
	);
}

export { ToastNotifications };
