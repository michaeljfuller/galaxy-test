import React, {CSSProperties, memo} from "react";
import {Link, withRouter, RouteComponentProps} from "react-router-dom";
import css from "./NavBar/NavBar.module.scss";
import {classNames} from "../../utils/component-utils";
import InnerGridIcon from "../icons/InnerGridIcon";
import useAuth from "../../hooks/useAuth";

export interface NavBarProps extends RouteComponentProps {
    className?: string;
    style?: CSSProperties;
}

export function RawNavBar(props: NavBarProps) {
    const auth = useAuth();
    const user = auth.currentUser;

    const handleLogOut = async () => {
        await auth.signOut();
    }

    return <nav className={classNames(css.root)} style={props.style}>

        <div className={css.menu}><InnerGridIcon /></div>
        <p className={css.title}>Galactic</p>

        <div className={css.links}>
            <Link to="/">Home</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/feed">Feed</Link>
            <Link to="/saved">Saved</Link>
            <span>•••</span>
        </div>

        <div className={css.actions}>
            <div className={css.notifications}>Bell</div>
            <img className={css.avatar} src={user?.avatar} alt="avatar" />
            <button onClick={handleLogOut}>Log out</button>
        </div>

    </nav>;
}

export const NavBar = memo(withRouter(RawNavBar));

NavBar.displayName = "NavBar";
export default NavBar;