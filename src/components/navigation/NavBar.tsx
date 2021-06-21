import React, {CSSProperties, memo, useState} from "react";
import {Link, withRouter, RouteComponentProps} from "react-router-dom";
import css from "./NavBar/NavBar.module.scss";
import {classNames} from "../../utils/component-utils";
import InnerGridIcon from "../icons/InnerGridIcon";
import useAuth from "../../hooks/useAuth";
import {errorMessage} from "../../utils/error-utils";
import Badge from "../ui/Badge";

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
    const auth = useAuth();
    const user = auth.currentUser;
    const [signingOut, setSigningOut] = useState(false);

    const handleLogOut = () => {
        setSigningOut(true);
        auth.signOut().then(
            () => props.history.push("/"),
            error => {
                alert(errorMessage(error));
                setSigningOut(false);
            }
        );
    };
    const disabled = signingOut;

    return <nav className={classNames(css.root)} style={props.style}>

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
            <Badge value={3}>
                <div className={css.notifications}>Bell</div>
            </Badge>
            <img className={css.avatar} src={user?.avatar} alt="avatar" />
            <button onClick={handleLogOut} disabled={disabled}>Log out</button>
        </div>

    </nav>;
}

export const NavBar = memo(withRouter(RawNavBar));

NavBar.displayName = "NavBar";
export default NavBar;