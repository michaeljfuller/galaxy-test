import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider as ReduxProvider} from 'react-redux'

import store from "./store";

import AuthContext from "./services/auth/AuthContext";
import MockVolatileAuth from "./services/auth/providers/MockVolatileAuth";

import ArticlesContext from "./services/articles/ArticlesContext";
import MockArticlesApi from "./services/articles/providers/MockArticlesApi";

import NotificationsContext from "./services/notifications/NotificationsContext";
import MockNotificationsApi from "./services/notifications/providers/MockNotificationsApi";

const auth = new MockVolatileAuth({});
const articles = new MockArticlesApi({});
const notifications = new MockNotificationsApi({});

export function AppWrapper(props: React.PropsWithChildren<{}>) {
    return <React.StrictMode>

        <AuthContext.Provider value={auth}>
            <ArticlesContext.Provider value={articles}>
                <NotificationsContext.Provider value={notifications}>

                    <ReduxProvider store={store}>
                        <BrowserRouter>
                            {props.children}
                        </BrowserRouter>
                    </ReduxProvider>

                </NotificationsContext.Provider>
            </ArticlesContext.Provider>
        </AuthContext.Provider>

    </React.StrictMode>;
}

export default AppWrapper;
