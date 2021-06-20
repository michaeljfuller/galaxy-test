import React, {CSSProperties, memo} from "react";
import {RouteComponentProps, withRouter, Link, LinkProps, RouteProps, Switch, Route} from "react-router-dom";
import css from "./SideNavigator/SideNavigator.module.scss";
import {classNames} from "../utils/component-utils";

export interface SideNavigatorProps extends RouteComponentProps {
    links: SideNavigatorLink[];
    className?: string;
    style?: CSSProperties;
}
export interface SideNavigatorLink extends Omit<RouteProps, 'children'|'path'>{
    path: string; // Ensure string, to be used as a key and match LinkProps['to']
    title: string;
    replace?: LinkProps['replace'];
}

/**
 * Add a sidebar navigator which renders the Links and Routes.
 */
export function RawSideNavigator(props: SideNavigatorProps) {
    const fullPath = props.location.pathname;

    return <div className={classNames(css.root, props.className)} style={props.style}>

        <nav className={css.side}>{
            props.links.map(link => (
                <Link key={link.path} to={props.match?.url + link.path}>
                    <div
                        className={classNames(
                            css.link,
                            props.match?.url + link.path === fullPath ? css.active : null
                        )}
                    >
                        {link.title}
                    </div>
                </Link>
            ))
        }</nav>

        <div className={css.content}>
            <Switch>
                {
                    props.links.map(({
                        title,
                        replace,
                        path,
                        ...routeProps
                    }) => <Route
                        key={path}
                        path={props.match?.path + path}
                        {...routeProps}
                    />)
                }
                <Route path="*">
                    <p>Section not found</p>
                </Route>
            </Switch>
        </div>

    </div>;
}

export const SideNavigator = memo(withRouter(RawSideNavigator));
SideNavigator.displayName = "SideNavigator";
export default SideNavigator;