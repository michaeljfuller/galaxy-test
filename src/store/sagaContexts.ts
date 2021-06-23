import MockVolatileAuth from "../services/auth/MockVolatileAuth";
// import Auth0Api from "../services/auth/Auth0Api";
// import MockNotificationsApi from "../services/notifications/MockNotificationsApi";
import NotificationsApi from "../services/notifications/NotificationsApi";

export const sagaContexts = {
    // auth: window.location.origin === "http://localhost:8080" ? new Auth0Api({}) : new MockVolatileAuth({}), // TODO Re-enable if/when Auth0 is working
    auth: new MockVolatileAuth({}),
    notifications: new NotificationsApi({}),
};
export default sagaContexts;

export type SagaContextKey = keyof typeof sagaContexts;
export type SagaContext<key extends SagaContextKey> = typeof sagaContexts[key];
