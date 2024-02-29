/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/table/_table.scss
 */
import * as React from 'react';
import TableHeader from "./atoms/TableHeader/index.js";
import CellHeader from "./atoms/CellHeader/index.js";
import Cell from "./atoms/Cell/index.js";
import Row from "./atoms/Row/index.js";
/**
 * Use the table component to make information easier to compare and scan for users.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/table
 * - https://design-system.service.gov.uk/components/table/
 */
export declare const Table: TableType;
export interface TableType extends React.FC<TableProps> {
    CellHeader: typeof CellHeader;
    Row: typeof Row;
    Cell: typeof Cell;
    Header: typeof TableHeader;
}
export interface TableProps {
    /** Table body rows and cells (for backward compatibility) */
    body?: React.ReactNode;
    /** Table body rows and cells (recommended way) */
    children?: React.ReactNode;
    /** Table header rows and cells */
    head?: React.ReactNode;
    /** Table caption title */
    caption?: string;
}
export default Table;