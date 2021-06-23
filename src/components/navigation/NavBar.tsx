import React, {CSSProperties, memo, useEffect, useState} from "react";
import {Link, withRouter, RouteComponentProps} from "react-router-dom";
import css from "./NavBar/NavBar.module.scss";
import {classNames} from "../../utils/component-utils";
import InnerGridIcon from "../icons/InnerGridIcon";
import useUser from "../../hooks/useUser";
import {errorMessage} from "../../utils/error-utils";
import Badge from "../ui/Badge";
import {useStoreDispatch, useStoreSelector} from "../../hooks/useStore";
import {signOut} from "../../store/user/user-actions";
import useNotifications from "../../hooks/useNotifications";
import PopUnder from "../ui/PopUnder";
import LatestNotificationsList from "./NavBar/LatestNotificationsList";

export interface NavBarProps extends RouteComponentProps {
    className?: string;
    style?: CSSProperties;
}

const links = Object.freeze([
    {title: "Home", to: "/"},
    {title: "Categories", to: "/categories"},
    {title: "Feed", to: "/feed"},
    {title: "Saved", to: "/saved"},
]);

export function RawNavBar(props: NavBarProps) {
    const user = useUser();
    const notifications = useNotifications();
    const dispatch = useStoreDispatch();
    const {signingOut, signInError} = useStoreSelector(state => state.user);

    const [openNotifications, setOpenNotifications] = useState(false);
    const handleToggleNotifications = () => setOpenNotifications(!openNotifications);

    const handleLogOut = () => dispatch(signOut());
    const disabled = signingOut;

    useEffect(() => {
        if (signInError) alert(errorMessage(signInError));
    }, [signInError]);

    return <nav className={classNames(css.root, props.className)} style={props.style}>

        <div className={css.menu}><InnerGridIcon /></div>
        <p className={css.title}>Galactic</p>

        <div className={css.links}>
            {
                links.map(link => {
                    if (disabled) return <span key={link.to}>{link.title}</span>;
                    return <Link key={link.to} to={link.to}>{link.title}</Link>;
                })
            }
            <span>•••</span>
        </div>

        <div className={css.actions}>
            <PopUnder
                open={openNotifications}
                onClose={handleToggleNotifications}
                content={LatestNotificationsList}
                className={css.popUnder}
            >
                <Badge value={notifications.latest.length} hidden={notifications.fetchingLatest}>
                    <div className={css.notifications} onClick={handleToggleNotifications}>
                        <img src="/bell.svg" alt="Notifications" />
                    </div>
                </Badge>
            </PopUnder>
            <img className={css.avatar} src={user?.avatar} alt="avatar" />
            <button onClick={handleLogOut} disabled={disabled}>Log out</button>
        </div>

    </nav>;
}

export const NavBar = memo(withRouter(RawNavBar));

NavBar.displayName = "NavBar";
export default NavBar;
