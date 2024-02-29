/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_main-wrapper.scss
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_width-container.scss
 */
import * as React from 'react';
import Main from "./atoms/main.js";
import WidthContainer from "./atoms/width-container.js";
/**
 * Use this template to keep your pages consistent with the rest of GOV.UK.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/page
 * - https://design-system.service.gov.uk/styles/page-template/
 * - https://design-system.service.gov.uk/styles/layout/#page-wrappers
 */
export declare const Page: PageType;
export interface PageType extends React.FC<PageProps> {
    Main: typeof Main;
    WidthContainer: typeof WidthContainer;
}
export interface PageProps {
    /**
     * Page contents
     */
    children?: React.ReactNode;
    /**
     * ID for page content
     */
    id?: string;
    /**
     * Override the default page header component.
     */
    header?: React.ReactNode;
    /**
     * Override the default page footer component.
     */
    footer?: React.ReactNode;
    /**
     * Override the default wrapper component for main page content
     */
    main?: React.ElementType;
    /**
     * Content that needs to appear outside the main page wrapper (see `main`).
     * For example: A back link component, breadcrumbs, phase banner component
     */
    beforeChildren?: React.ReactNode;
    /**
     * Override the default page container component.
     * `beforeChildren` and `children` (wrapped in `main`) will be placed inside this component.
     */
    container?: React.ElementType;
}
export default Page;