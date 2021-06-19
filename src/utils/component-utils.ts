import type {CSSProperties} from "react";

/** Combine styles */
export function styles(...styles: Array<CSSProperties|undefined|null|false>): CSSProperties {
    return Object.assign({}, ...styles);
}

/** Combine class names */
export function classNames(...classNames: Array<string|undefined|null|false>): string {
    return classNames.filter(Boolean).join(' ');
}
