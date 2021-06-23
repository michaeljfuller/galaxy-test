import {WebAuth, AuthOptions} from "auth0-js";
import type {AuthService} from "../AuthService";

export default class Auth0Api implements AuthService {
    public currentUser?: User;

    private authOptions: AuthOptions = {
        domain: "dev-h7rcrzi5.eu.auth0.com",
        clientID: "oqFwQOwcuC5fqqITBkVOBvGntotirQz6",
        redirectUri: "http://localhost:8080/login/callback",
        responseType: "token id_token",
        scope: "openid profile",
    };

    private webAuth: WebAuth;

    constructor(authOptions?: Partial<AuthOptions>) {
        Object.assign(this.authOptions, authOptions);
        this.webAuth = new WebAuth(this.authOptions);
    }

    async fetchUser(): Promise<User> {
        throw new Error("Not implemented")
    }

    signIn(email: string, password: string): Promise<User> {
        return new Promise((resolve, reject) => {
            console.log("Auth0Api.signIn", {email, password}, this.authOptions);
            this.webAuth.login(
                { email, password },
                (error, result) => {

                    if (error) {
                        console.warn("Auth0Api.signIn - Error:", error);
                        // TODO "The realm Username-Password-Authentication is disabled." - Sounds server-side. Perhaps it's no longer available.
                        return reject(error.description);
                    }
                    console.info("Auth0Api.signIn - Result:", result);

                }
            );
        });
    }

    async signOut(): Promise<boolean> {
        throw new Error("Not implemented")
    }

    async signUp(email: string, password: string): Promise<User> {
        throw new Error("Not implemented")
    }

}
