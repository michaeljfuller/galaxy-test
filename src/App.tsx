import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import css from './App.module.scss';
import {LogInScreen} from "./screens/LogInScreen";
import {ProfileScreen} from "./screens/ProfileScreen";

function App() {
    return <div className={css.root}>
        <BrowserRouter>
            <Switch>

                <Redirect exact from="/" to="/profile" />
                <Route path="/login" component={LogInScreen} />
                <Route path="/profile" component={ProfileScreen} />

                <Route path="*">
                    <h1>404</h1>
                    <p>Page not found</p>
                </Route>

            </Switch>
        </BrowserRouter>
    </div>;
}

export default App;
