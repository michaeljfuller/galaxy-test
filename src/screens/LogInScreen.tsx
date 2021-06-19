import React from "react";
import {RouteChildrenProps} from "react-router-dom";
import useAuth from "../hooks/useAuth";

export interface LogInScreenProps extends RouteChildrenProps {}

export function LogInScreen(props: LogInScreenProps) {
    const auth = useAuth();
    const [user, setUser] = React.useState(auth.currentUser);

    React.useEffect(() => {
        auth.signIn("test@user", "pass").then(setUser);
    }, [auth]);

    return <div>
        <h1>LogInScreen</h1>
        <pre>{JSON.stringify(user, null, 4) || 'Not signed in'}</pre>
        <img src={user?.avatar} alt="avatar" />
    </div>;
}
