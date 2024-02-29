/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/footer/template.njk
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/footer/_footer.scss
 */
import * as React from 'react';
import type { CopyrightProps } from "./atoms/copyright/index.js";
import WidthContainer from "./atoms/width-container/index.js";
import Navigation from "./atoms/navigation/index.js";
import Link from "./atoms/link/index.js";
import MetaCustom from "./atoms/meta-custom/index.js";
import Licence from "./atoms/licence/index.js";
import MetaLinks from "./molecules/meta-links/index.js";
import NavigationLinks from "./molecules/navigation-links/index.js";
/**
 * The footer provides copyright, licensing and other information about your service and department.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/footer
 * - https://design-system.service.gov.uk/components/footer/
 *
 */
export declare const Footer: FooterType;
export interface FooterType extends React.FC<FooterProps> {
    Link: typeof Link;
    Navigation: typeof Navigation;
    MetaCustom: typeof MetaCustom;
    MetaLinks: typeof MetaLinks;
    NavigationLinks: typeof NavigationLinks;
    WidthContainer: typeof WidthContainer;
    Licence: typeof Licence;
}
interface FooterProps {
    /**
     * Footer navigation links
     */
    children?: React.ReactNode;
    /**
     * Override the default footer container component.
     * `children`, `copyright` and `meta` will be placed inside this component.
     */
    container?: React.ElementType;
    /**
     * Copyright information
     */
    copyright?: CopyrightProps;
    /**
     * Meta text and links
     */
    meta?: React.ReactNode;
    /**
     * Licence content
     */
    licence?: false | string | React.ReactNode;
}
export default Footer;
