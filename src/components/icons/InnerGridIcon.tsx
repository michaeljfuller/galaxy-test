import React, {CSSProperties} from "react";

export interface InnerGridIconProps {
    style?: CSSProperties;
    className?: string;
    color?: string;
}

/**
 * Draws 9 squares in a 3x3 grid, evenly spaced.
 */
export function InnerGridIcon({
    style,
    className,
    color = "#000000",
}: InnerGridIconProps) {
    const squareSize = 4;
    const gap = 2;
    const rounding = Math.min(squareSize, squareSize) / 5;
    const totalSize = squareSize*3 + gap*2;

    const offsetX = squareSize + gap;
    const offsetY = squareSize + gap;

    return <svg
        xmlns="http://www.w3.org/2000/svg"
        width={totalSize}
        height={totalSize}
        style={style}
        className={className}
    >
        <g>
            <rect width={squareSize} height={squareSize} rx={rounding} fill={color} x={0}         y={0} />
            <rect width={squareSize} height={squareSize} rx={rounding} fill={color} x={offsetX}   y={0} />
            <rect width={squareSize} height={squareSize} rx={rounding} fill={color} x={offsetX*2} y={0} />

            <rect width={squareSize} height={squareSize} rx={rounding} fill={color} x={0}         y={offsetY} />
            <rect width={squareSize} height={squareSize} rx={rounding} fill={color} x={offsetX}   y={offsetY} />
            <rect width={squareSize} height={squareSize} rx={rounding} fill={color} x={offsetX*2} y={offsetY} />

            <rect width={squareSize} height={squareSize} rx={rounding} fill={color} x={0}         y={offsetY*2} />
            <rect width={squareSize} height={squareSize} rx={rounding} fill={color} x={offsetX}   y={offsetY*2} />
            <rect width={squareSize} height={squareSize} rx={rounding} fill={color} x={offsetX*2} y={offsetY*2} />
        </g>
    </svg>;
}
export default InnerGridIcon;
