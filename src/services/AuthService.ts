export interface AuthService {
    signUp: (email: string, password: string) => Promise<User>;
    signIn: (email: string, password: string) => Promise<User>;
    signOut: () => Promise<boolean>;
    fetchUser: () => Promise<User|null>;
    currentUser?: User;
}
