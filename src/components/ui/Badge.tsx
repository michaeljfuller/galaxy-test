import React, {CSSProperties} from "react";
import css from "./Badge/Badge.module.scss";
import {classNames} from "../../utils/component-utils";

export interface BadgeProps {
    value: string|number;
    className?: string;
    style?: CSSProperties;
}

export function Badge(props: React.PropsWithChildren<BadgeProps>) {
    return <div
        className={classNames(css.root, props.className)}
        style={props.style}
    >
        {props.children}
        <div className={css.badge}>{props.value}</div>
    </div>
}
export default Badge;
