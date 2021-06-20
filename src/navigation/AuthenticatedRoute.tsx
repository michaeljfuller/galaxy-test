import React from 'react';
import {Route, RouteProps, Redirect, RedirectProps} from "react-router-dom";
import useAuth from "../hooks/useAuth";

export type AuthenticatedRouteProps = Omit<RouteProps, 'render'> & {
    redirectTo: RedirectProps['to'],
    pushRedirect?: RedirectProps['push'],
};

/** If the user isn't logged in, redirect. */
export function AuthenticatedRoute({
    component,
    children,
    redirectTo,
    pushRedirect,
    ...props
}: AuthenticatedRouteProps) {
    const user = useAuth().currentUser;
    return <Route {...props}>{
        user ? (children || component) : <Redirect to={redirectTo} push={pushRedirect} />
    }</Route>;
}
export default AuthenticatedRoute;
