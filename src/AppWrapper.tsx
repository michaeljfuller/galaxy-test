import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider as ReduxProvider} from 'react-redux'

import store from "./store";

export function AppWrapper(props: React.PropsWithChildren<{}>) {
    return <React.StrictMode>
        <ReduxProvider store={store}>
            <BrowserRouter>
                {props.children}
            </BrowserRouter>
        </ReduxProvider>
    </React.StrictMode>;
}

export default AppWrapper;
