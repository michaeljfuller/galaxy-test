import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {HashRouter} from "react-router-dom";
import {Provider as ReduxProvider} from 'react-redux'

import store from "./store";
import {BasePathContext} from "./hooks/useBasePath";

export function AppWrapper(props: React.PropsWithChildren<{}>) {
    return <React.StrictMode>
        <ReduxProvider store={store}>
            <RouterPicker>
                {props.children}
            </RouterPicker>
        </ReduxProvider>
    </React.StrictMode>;
}

export default AppWrapper;

function RouterPicker(props: React.PropsWithChildren<{}>) {
    // If GitHub pages, set baseBath and use HashRouter
    if (window.location.hostname === "michaeljfuller.github.io") {
        return <BasePathContext.Provider value="/galaxy-test">
            <HashRouter>
                {props.children}
            </HashRouter>
        </BasePathContext.Provider>;
    }

    return <BrowserRouter>
        {props.children}
    </BrowserRouter>;
}
