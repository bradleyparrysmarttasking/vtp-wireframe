import type { StyledComponentProps } from 'styled-components';
import * as React from 'react';
declare const PaginationAnchor: PaginationAnchorType;
interface PaginationAnchorType extends React.FC<PaginationAnchorProps> {
    (props: PaginationAnchorPropsWithoutAs): React.ReactElement<PaginationAnchorPropsWithoutAs>;
    <AsC extends string | React.ComponentType<any> = 'a', FAsC extends string | React.ComponentType<any> = AsC>(props: PaginationAnchorPropsWithAs<AsC, FAsC>): React.ReactElement<PaginationAnchorPropsWithAs<AsC, FAsC>>;
}
type PaginationAnchorPropsWithoutAs = StyledComponentProps<'a', never, PaginationAnchorProps, never> & {
    as?: never | undefined;
    forwardedAs?: never | undefined;
};
type PaginationAnchorPropsWithAs<AsC extends string | React.ComponentType<any>, FAsC extends string | React.ComponentType<any> = AsC> = StyledComponentProps<AsC, never, PaginationAnchorProps, never, FAsC> & {
    as?: AsC | undefined;
    forwardedAs?: FAsC | undefined;
};
interface PaginationAnchorProps {
    children: string | React.ReactElement;
    previousPage?: boolean;
    nextPage?: boolean;
    pageTitle?: string;
}
export default PaginationAnchor;
