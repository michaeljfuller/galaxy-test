import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import css from './App.module.scss';

import AuthenticatedRoute from "./navigation/AuthenticatedRoute";
import LogInScreen from "./screens/LogInScreen";
import ProfileScreen from "./screens/ProfileScreen";

import {useStoreDispatch} from "./hooks/useStore";
import {fetchLatest as fetchLatestNotifications} from "./store/notifications/notifications-actions";
import useUser from "./hooks/useUser";
import NotificationsScreen from "./screens/NotificationsScreen";

function App() {
    const user = useUser();
    const dispatch = useStoreDispatch();

    const userId = user?.email;
    useEffect(() => {
        if (userId) dispatch(fetchLatestNotifications());
    }, [userId, dispatch]);

    return <div className={css.root}>
        <Switch>

            <Redirect exact from="/" to="/profile" />
            <Route path="/login" component={LogInScreen} />
            <AuthenticatedRoute redirectTo="/login" path="/profile" component={ProfileScreen}/>
            <AuthenticatedRoute redirectTo="/login" path="/notifications/:id?" component={NotificationsScreen} />

            <Route path="*">
                <h1>404</h1>
                <p>Page not found</p>
            </Route>

        </Switch>
    </div>;
}

export default App;
