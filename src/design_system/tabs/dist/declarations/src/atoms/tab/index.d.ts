import type { StyledComponentProps } from 'styled-components';
import * as React from 'react';
declare const Tab: TabType;
interface TabType extends React.FC<TabOwnProps> {
    (props: TabPropsWithoutAs): React.ReactElement<TabPropsWithoutAs>;
    <AsC extends string | React.ComponentType<any> = 'a', FAsC extends string | React.ComponentType<any> = AsC>(props: TabPropsWithAs<AsC, FAsC>): React.ReactElement<TabPropsWithAs<AsC, FAsC>>;
}
type TabPropsWithoutAs = StyledComponentProps<'a', never, TabOwnProps, never> & {
    as?: never | undefined;
    forwardedAs?: never | undefined;
};
type TabPropsWithAs<AsC extends string | React.ComponentType<any>, FAsC extends string | React.ComponentType<any> = AsC> = StyledComponentProps<AsC, never, TabOwnProps, never, FAsC> & {
    as?: AsC | undefined;
    forwardedAs?: FAsC | undefined;
};
interface TabOwnProps {
    /** Different stylings for the Tab displaying content */
    selected?: boolean;
}
export default Tab;
