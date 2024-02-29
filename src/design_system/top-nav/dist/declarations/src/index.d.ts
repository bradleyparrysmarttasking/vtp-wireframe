import React, { Component } from 'react';
interface TopNavProps {
    /** Top nav background color */
    bgColor?: string;
    /** Top nav text color */
    color?: string;
    /** Is the mobile navigation open by default? */
    defaultOpen?: boolean;
    /** Company component e.g. GOV UK */
    company?: React.ReactNode;
    /** Service title component e.g. Food Standards Authority */
    serviceTitle?: React.ReactNode;
    /** Search component */
    search?: React.ReactNode;
    /** List Navigation items with anchor tags e.g. NavAnchor components */
    children?: React.ReactNode;
}
/**
 * The GOV.UK header shows users that they are on GOV.UK and which service they are using.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/top-nav
 * - https://design-system.service.gov.uk/components/header/
 */
export declare class TopNav extends Component<TopNavProps, {
    navigationOpen: boolean;
}> {
    static IconTitle: React.FC<import("./atoms/icon-title/index.js").IconTitleProps>;
    static Anchor: import("styled-components").StyledComponent<"a", any, {}, never>;
    static NavLink: import("styled-components").StyledComponent<"a", any, {}, never>;
    static displayName: string;
    static defaultProps: {
        bgColor: any;
        color: any;
        company: JSX.Element;
        serviceTitle: any;
        search: boolean;
        children: any;
        defaultOpen: boolean;
    };
    constructor(props: TopNavProps);
    toggleNavigationOpen: () => void;
    render(): JSX.Element;
}
export default TopNav;
