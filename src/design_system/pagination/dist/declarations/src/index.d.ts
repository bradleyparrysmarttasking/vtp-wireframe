/**
 * ### References:
 *
 * https://github.com/alphagov/static/blob/077649737c43d3937f745df0b3adade9df3717dc/app/views/govuk_component/docs/previous_and_next_navigation.yml
 * https://github.com/alphagov/govuk_publishing_components/blob/master/app/views/govuk_publishing_components/components/docs/previous_and_next_navigation.yml
 */
import * as React from 'react';
import Anchor from "./anchor.js";
/**
 * Navigational links that allow users to navigate within a series of pages or elements.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/pagination
 * - https://components.publishing.service.gov.uk/component-guide/previous_and_next_navigation
 *
 */
export declare const Pagination: PaginationType;
export interface PaginationType extends React.FC<PaginationProps> {
    Anchor: typeof Anchor;
}
export interface PaginationProps {
    children: React.ReactNode;
}
export default Pagination;