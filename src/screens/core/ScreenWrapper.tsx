import React, {PropsWithChildren} from "react";
import css from "./ScreenWrapper.module.scss";
import NavBar from "../../components/navigation/NavBar";
import {classNames} from "../../utils/component-utils";

export type ScreenWrapperProps = PropsWithChildren<{
    className?: string;
}>;

export function ScreenWrapper(props: ScreenWrapperProps) {
    return <div className={classNames(css.root, props.className)}>
        <NavBar className={css.navBar} />
        {props.children}
    </div>;
}
export default ScreenWrapper;
