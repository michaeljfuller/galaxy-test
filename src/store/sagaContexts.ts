import MockVolatileAuth from "../services/auth/MockVolatileAuth";
// import MockNotificationsApi from "../services/notifications/MockNotificationsApi";
import NotificationsApi from "../services/notifications/NotificationsApi";

const mockAuth = new MockVolatileAuth({});
// const mockNotifications = new MockNotificationsApi({ fetchNotificationsDelay: 1000 });
const notifications = new NotificationsApi({});

export const sagaContexts = {
    auth: mockAuth,
    notifications: notifications,
};
export default sagaContexts;

export type SagaContextKey = keyof typeof sagaContexts;
export type SagaContext<key extends SagaContextKey> = typeof sagaContexts[key];
