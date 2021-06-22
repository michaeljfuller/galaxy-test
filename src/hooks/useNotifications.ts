import {useContext} from "react";
import {NotificationsContext, NotificationsProvider} from "../services/notifications/NotificationsContext";

export default function useNotifications(): NotificationsProvider {
    const provider = useContext(NotificationsContext);
    if (!provider) throw Error("No NotificationsContext.Provider");
    return provider;
}
