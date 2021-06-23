import React, {CSSProperties} from "react";
import css from "./Badge/Badge.module.scss";
import {classNames} from "../../utils/component-utils";

export interface BadgeProps {
    value: string|number;
    hidden?: boolean;

    className?: string;
    style?: CSSProperties;
    containerClassName?: string;
    containerStyle?: CSSProperties;
}

export function Badge(props: React.PropsWithChildren<BadgeProps>) {
    return <div
        className={classNames(css.root, props.containerClassName)}
        style={props.containerStyle}
    >
        {props.children}
        {props.hidden ? null : <div
            className={classNames(css.badge, props.className)}
            style={props.style}
        >{props.value}</div>}
    </div>
}
export default Badge;
