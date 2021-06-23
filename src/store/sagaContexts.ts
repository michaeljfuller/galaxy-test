import MockVolatileAuth from "../services/auth/MockVolatileAuth";

export const sagaContexts = {
    auth: new MockVolatileAuth({}),
};
export default sagaContexts;

export type SagaContextKey = keyof typeof sagaContexts;
export type SagaContext<key extends SagaContextKey> = typeof sagaContexts[key];
