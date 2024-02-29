import type { CSSObject } from 'styled-components';
export declare function simple(size: number): number;
export declare function responsive({ size, property, direction, adjustment, }: {
    size: number | string;
    property: string;
    direction?: string | string[];
    adjustment?: number;
}): {
    [key: string]: string;
};
export declare function responsiveMargin(value: number | string | {
    size: number | string;
    direction?: string | string[];
    adjustment?: number;
}): CSSObject;
export declare function responsivePadding(value: number | {
    size: number;
    direction?: string | string[];
    adjustment?: number;
}): CSSObject;
type Margin = number | {
    direction?: string | string[];
    size: number;
    adjustment?: number;
};
type Padding = number | {
    size: number;
    direction?: string | string[];
} | {
    size: number;
    direction?: string | string[];
}[];
export declare function withWhiteSpace(config?: {
    margin?: Margin | Margin[];
    padding?: Padding | Padding[];
    marginBottom?: number;
}): (settings?: WithWhiteSpaceProps) => CSSObject[];
export declare function withWidth(config?: {
    width?: string;
    mediaQuery?: string;
    noDefault?: boolean;
}): ({ setWidth, }?: WithWidthProps) => {
    [x: string]: string | {
        width: string;
    };
    width?: string;
};
export type WithWhiteSpaceProps = {
    margin?: Margin | Margin[];
    padding?: Padding | Padding[];
    mb?: number | string;
};
export type WithWidthProps = {
    setWidth?: string | number;
};
export declare enum ComponentSizeVariant {
    XLARGE = "XLARGE",
    LARGE = "LARGE",
    MEDIUM = "MEDIUM",
    SMALL = "SMALL"
}
export {};
