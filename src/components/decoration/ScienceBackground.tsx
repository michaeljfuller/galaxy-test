import React, {CSSProperties} from "react";
import css from './ScienceBackground/ScienceBackground.module.css';
import {classNames, styles} from "../../utils/component-utils";

export interface ScienceBackgroundProps {
    className?: string;
    style?: CSSProperties;
}

export default function ScienceBackground({
    className = '',
    style,
}: ScienceBackgroundProps) {
    return <div
        className={classNames(css.root, className)}
        style={styles(defaultScienceBackgroundStyle, style)}
    >
        <div className={css.underlay} />
        <img className={css.image} src="/science-background-image.jpg" alt="science background" />
    </div>
}

export const ScienceBackgroundAspectRatio = 1440 / 1028;
export const defaultScienceBackgroundStyle = Object.freeze({
    height: '100vh',
    width: Math.floor(100 / ScienceBackgroundAspectRatio) + 'vh',
});
