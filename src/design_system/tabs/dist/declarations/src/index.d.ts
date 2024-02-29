/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/tabs
 */
import * as React from 'react';
import List from "./atoms/list/index.js";
import Panel from "./atoms/panel/index.js";
import Tab from "./atoms/tab/index.js";
import Title from "./atoms/title/index.js";
/**
 * The tabs component lets users navigate between related sections of content, displaying one section at a time.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/tabs
 * - https://design-system.service.gov.uk/components/tabs/
 */
export declare const Tabs: TabsType;
export interface TabsType extends React.FC<TabsProps> {
    Tab: typeof Tab;
    List: typeof List;
    Panel: typeof Panel;
    Title: typeof Title;
}
export interface TabsProps {
    /** child components that will appear in the Tabs section */
    children: React.ReactNode;
}
export { Tab, List, Panel, Title };
export default Tabs;
