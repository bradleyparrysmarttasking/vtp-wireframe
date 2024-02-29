/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_typography.scss
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_typography.scss
 */
import type { StyledComponentProps } from 'styled-components';
import type { WithWhiteSpaceProps } from '@govuk-react/lib';
import * as React from 'react';
/**
 * Use heading tags, such as `<h1>`, `<h2>` and so on, to tag the headings on a page.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/heading
 * - https://design-system.service.gov.uk/styles/typography/#headings
 */
export declare const Heading: HeadingType;
export interface HeadingType extends React.FC<HeadingOwnProps & WithWhiteSpaceProps> {
    (props: HeadingPropsWithoutAs): React.ReactElement<HeadingPropsWithoutAs>;
    <AsC extends string | React.ComponentType<any> = 'h1', FAsC extends string | React.ComponentType<any> = AsC>(props: HeadingPropsWithAs<AsC, FAsC>): React.ReactElement<HeadingPropsWithAs<AsC, FAsC>>;
}
type HeadingPropsWithoutAs = StyledComponentProps<'h1', never, HeadingOwnProps, never> & {
    as?: never | undefined;
    forwardedAs?: never | undefined;
};
type HeadingPropsWithAs<AsC extends string | React.ComponentType<any>, FAsC extends string | React.ComponentType<any> = AsC> = StyledComponentProps<AsC, never, HeadingOwnProps, never, FAsC> & {
    as?: AsC | undefined;
    forwardedAs?: FAsC | undefined;
};
export interface HeadingOwnProps {
    /**
     * Semantic heading level value between 1 and 6 (deprecated)
     */
    level?: number | string;
    /**
     * Visual size level, accepts:
     *    `XLARGE`, `LARGE`, `MEDIUM`, `SMALL`, `XL`, `L`, `M`, `S`
     *    or a numeric size that fits in the GDS font scale list
     */
    size?: number | string;
    children?: React.ReactNode;
}
export default Heading;
