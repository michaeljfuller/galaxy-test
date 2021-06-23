import React, {ComponentType, CSSProperties, PropsWithChildren} from "react";
import css from "./PopUnder/PopUnder.module.scss";
import {classNames} from "../../utils/component-utils";

export type PopUnderProps = PropsWithChildren<{
    open: boolean;
    content: ComponentType;
    className?: string;
    style?: CSSProperties;
    containerClassName?: string;
    containerStyle?: CSSProperties;
    onClose: () => void;
}>;

export default function PopUnder(props: PopUnderProps) {
    return <div className={classNames(css.root, props.containerClassName)} style={props.containerStyle}>
        {props.open ? <div className={css.background} onClick={props.onClose} /> : null}
        {props.children}
        {props.open ? <div className={classNames(css.popUnder, props.className)} style={props.style}>
            {React.createElement(props.content)}
        </div> : null}
    </div>;
}
