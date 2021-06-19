import React from 'react';
import {BrowserRouter} from "react-router-dom";

import AuthContext from "./services/auth/AuthContext";
import MockVolatileAuth from "./services/auth/providers/MockVolatileAuth";

const auth = new MockVolatileAuth({});

export function AppWrapper(props: React.PropsWithChildren<{}>) {
    return <React.StrictMode>
        <AuthContext.Provider value={auth}>
            <BrowserRouter>
                {props.children}
            </BrowserRouter>
        </AuthContext.Provider>
    </React.StrictMode>
}

export default AppWrapper;
