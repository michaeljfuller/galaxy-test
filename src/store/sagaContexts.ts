import MockVolatileAuth from "../services/auth/MockVolatileAuth";
import MockNotificationsApi from "../services/notifications/MockNotificationsApi";

export const sagaContexts = {
    auth: new MockVolatileAuth({}),
    notifications: new MockNotificationsApi({
        fetchNotificationsDelay: 1000,
    }),
};
export default sagaContexts;

export type SagaContextKey = keyof typeof sagaContexts;
export type SagaContext<key extends SagaContextKey> = typeof sagaContexts[key];
