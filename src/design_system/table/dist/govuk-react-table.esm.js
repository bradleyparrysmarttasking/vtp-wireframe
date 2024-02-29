import * as React from 'react';
import styled from 'styled-components';
import { typography, spacing } from '@govuk-react/lib';
import { FONT_WEIGHTS, SPACING_POINTS } from '@govuk-react/constants';
import { BORDER_COLOUR } from 'govuk-colours';

// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/table/_table.scss
const TableHeader = styled('thead').withConfig({
  displayName: "TableHeader",
  componentId: "sc-1n1nw4b-0"
})({});

// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/table/_table.scss
const TableBody = styled('tbody').withConfig({
  displayName: "TableBody",
  componentId: "sc-1qqarm8-0"
})({});

// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/table/_table.scss
const Caption = styled('caption').withConfig({
  displayName: "Caption",
  componentId: "sc-pvwfz5-0"
})({
  fontWeight: Number(FONT_WEIGHTS.bold),
  display: 'table-caption',
  textAlign: 'left'
});

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

const Cell = styled('td').withConfig({
  displayName: "Cell",
  componentId: "sc-msv0l6-0"
})(_ref => {
  let {
    numeric,
    alignRight = numeric,
    bold
  } = _ref;
  return {
    padding: `${SPACING_POINTS[2]}px ${SPACING_POINTS[4]}px ${SPACING_POINTS[2]}px 0`,
    borderBottom: `1px solid ${BORDER_COLOUR}`,
    textAlign: alignRight ? 'right' : 'left',
    fontWeight: bold ? Number(FONT_WEIGHTS.bold) : undefined,
    ':last-child': {
      paddingRight: 0
    }
  };
}, _ref2 => {
  let {
    numeric,
    isHeader
  } = _ref2;
  return numeric && !isHeader ? typography.font({
    tabular: true
  }) : undefined;
}, spacing.withWidth());

const CellHeader = props => /*#__PURE__*/React.createElement(Cell, _extends({
  as: "th",
  bold: true,
  isHeader: true
}, props));

// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/table/_table.scss
const Row = styled('tr').withConfig({
  displayName: "Row",
  componentId: "sc-1y8eqfp-0"
})({});

/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/table/_table.scss
 */
const StyledTable = styled('table').withConfig({
  displayName: "src__StyledTable",
  componentId: "sc-16s660v-0"
})(typography.font({
  size: 19
}), typography.textColour, {
  width: '100%',
  borderSpacing: 0,
  borderCollapse: 'collapse'
}, spacing.withWhiteSpace({
  marginBottom: 6
}));

/**
 * Use the table component to make information easier to compare and scan for users.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/table
 * - https://design-system.service.gov.uk/components/table/
 */
const Table = _ref => {
  let {
    caption,
    children,
    body = children,
    head,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledTable, props, caption && /*#__PURE__*/React.createElement(Caption, null, caption), head && /*#__PURE__*/React.createElement(TableHeader, null, head), /*#__PURE__*/React.createElement(TableBody, null, body));
};
Table.defaultProps = {
  body: undefined,
  caption: undefined,
  children: undefined,
  head: undefined
};
Table.displayName = 'Table';
Table.CellHeader = CellHeader;
Table.Row = Row;
Table.Cell = Cell;
Table.Header = TableHeader;

export { Table, Table as default };
