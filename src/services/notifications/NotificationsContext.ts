import {createContext} from "react";
import type NotificationsProvider from "./NotificationsProvider";

export type {NotificationsProvider} from "./NotificationsProvider";

export const NotificationsContext = createContext<NotificationsProvider|undefined>(undefined);
export default NotificationsContext;
