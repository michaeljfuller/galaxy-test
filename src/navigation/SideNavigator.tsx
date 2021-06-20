import React, {CSSProperties, memo} from "react";
import {RouteComponentProps, withRouter, Link, LinkProps, RouteProps, Switch, Route} from "react-router-dom";
import css from "./SideNavigator/SideNavigator.module.scss";
import {classNames} from "../utils/component-utils";

export interface SideNavigatorProps extends RouteComponentProps {
    links: SideNavigatorLink[];
    className?: string;
    style?: CSSProperties;
}
export interface SideNavigatorLink extends Omit<RouteProps, 'children'|'path'|'component'>{
    path: string; // Ensure string, to be used as a key and match LinkProps['to']
    title: string;
    replace?: LinkProps['replace'];
    component: RouteProps['component'] | undefined | null; // Allow to be disabled
}

/**
 * Add a sidebar navigator which renders the Links and Routes.
 */
export function RawSideNavigator(props: SideNavigatorProps) {
    const fullPath = props.location.pathname;

    return <div className={classNames(css.root, props.className)} style={props.style}>

        <nav className={css.side}>{
            props.links.map(link => {
                if (!link.component) {
                    return <div key={link.path} className={css.link+" "+css.disabled}>{link.title}</div>;
                }
                return <Link key={link.path} to={props.match?.url + link.path}>
                    <div
                        className={classNames(
                            css.link,
                            props.match?.url + link.path === fullPath ? css.active : null
                        )}
                    >
                        {link.title}
                    </div>
                </Link>
            })
        }</nav>

        <div className={css.content}>
            <Switch>
                {
                    props.links.map(({
                        title,
                        replace,
                        path,
                        component,
                        ...routeProps
                    }) => component ? <Route
                        key={path}
                        path={props.match?.path + path}
                        component={component}
                        {...routeProps}
                    /> : null)
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