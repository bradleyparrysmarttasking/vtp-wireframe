'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var lib = require('@govuk-react/lib');
var constants = require('@govuk-react/constants');
var govukColours = require('govuk-colours');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/table/_table.scss
const TableHeader = styled__default["default"]('thead').withConfig({
  displayName: "TableHeader",
  componentId: "sc-1n1nw4b-0"
})({});

// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/table/_table.scss
const TableBody = styled__default["default"]('tbody').withConfig({
  displayName: "TableBody",
  componentId: "sc-1qqarm8-0"
})({});

// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/table/_table.scss
const Caption = styled__default["default"]('caption').withConfig({
  displayName: "Caption",
  componentId: "sc-pvwfz5-0"
})({
  fontWeight: Number(constants.FONT_WEIGHTS.bold),
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

const Cell = styled__default["default"]('td').withConfig({
  displayName: "Cell",
  componentId: "sc-msv0l6-0"
})(_ref => {
  let {
    numeric,
    alignRight = numeric,
    bold
  } = _ref;
  return {
    padding: `${constants.SPACING_POINTS[2]}px ${constants.SPACING_POINTS[4]}px ${constants.SPACING_POINTS[2]}px 0`,
    borderBottom: `1px solid ${govukColours.BORDER_COLOUR}`,
    textAlign: alignRight ? 'right' : 'left',
    fontWeight: bold ? Number(constants.FONT_WEIGHTS.bold) : undefined,
    ':last-child': {
      paddingRight: 0
    }
  };
}, _ref2 => {
  let {
    numeric,
    isHeader
  } = _ref2;
  return numeric && !isHeader ? lib.typography.font({
    tabular: true
  }) : undefined;
}, lib.spacing.withWidth());

const CellHeader = props => /*#__PURE__*/React__namespace.createElement(Cell, _extends({
  as: "th",
  bold: true,
  isHeader: true
}, props));

// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/table/_table.scss
const Row = styled__default["default"]('tr').withConfig({
  displayName: "Row",
  componentId: "sc-1y8eqfp-0"
})({});

/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/table/_table.scss
 */
const StyledTable = styled__default["default"]('table').withConfig({
  displayName: "src__StyledTable",
  componentId: "sc-16s660v-0"
})(lib.typography.font({
  size: 19
}), lib.typography.textColour, {
  width: '100%',
  borderSpacing: 0,
  borderCollapse: 'collapse'
}, lib.spacing.withWhiteSpace({
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
  return /*#__PURE__*/React__namespace.createElement(StyledTable, props, caption && /*#__PURE__*/React__namespace.createElement(Caption, null, caption), head && /*#__PURE__*/React__namespace.createElement(TableHeader, null, head), /*#__PURE__*/React__namespace.createElement(TableBody, null, body));
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

exports.Table = Table;
exports["default"] = Table;
