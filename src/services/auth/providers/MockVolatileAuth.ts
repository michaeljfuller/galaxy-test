import type {AuthProvider} from "../AuthProvider";

export interface MockVolatileAuthOptions {
    fetchUserDelay: number;
    signInDelay: number;
    signOutDelay: number;
    signUpDelay: number;
}

/** A mock auth service that doesn't persist the user. */
export default class MockVolatileAuth implements AuthProvider {
    public currentUser?: User;

    private options: MockVolatileAuthOptions = {
        fetchUserDelay: 300,
        signInDelay: 500,
        signOutDelay: 500,
        signUpDelay: 100,
    }

    constructor(options?: Partial<MockVolatileAuthOptions>) {
        Object.assign(this.options, options);
    }

    async fetchUser() {
        await wait(this.options.fetchUserDelay);
        return this.currentUser || null;
    }

    async signIn(email: string, password: string) {
        await wait(this.options.signInDelay);
        if (!password) throw new Error("Failed to sign in");
        return this.currentUser = createUser(email);
    }

    async signOut(): Promise<boolean> {
        this.currentUser = undefined;
        await wait(this.options.signOutDelay);
        return true;
    }

    async signUp(email: string, password: string): Promise<User> {
        await wait(this.options.signUpDelay);
        if (!password) throw new Error("Failed to sign up");
        return this.currentUser = createUser(email);
    }

}

function wait(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

function createUser(email: string): User {
    return {
        email,
        givenName: email.split('@')[0] || '',
        familyName: email.split('@')[1] || '',
        token: Math.random().toString().split('.').pop() || '',
        avatar: "/avatar.jpg",
        phone: Math.random().toString().split('.')[1].slice(0, 10),
    };
}
