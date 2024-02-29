'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var constants = require('@govuk-react/constants');
var lib = require('@govuk-react/lib');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
 * - https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss
 */
const colValues = {
  columnOneQuarter: '25%',
  columnOneThird: '33.3333%',
  columnOneHalf: '50%',
  columnTwoThirds: '66.6667%',
  columnThreeQuarters: '75%',
  columnFull: '100%'
};
const widthFromProps = lib.spacing.withWidth({
  noDefault: true
});
const desktopWidthFromProps = lib.spacing.withWidth({
  mediaQuery: constants.MEDIA_QUERIES.DESKTOP,
  noDefault: true
});
function setGrowShrink(style) {
  const hasAutoWidth = [undefined, 'auto'].includes(style.width);

  // No explicit width means auto, so grow/shrink should be set
  return {
    ...style,
    flexGrow: hasAutoWidth ? 1 : 0,
    flexShrink: hasAutoWidth ? 1 : 0
  };
}

/**
 * Grid Column.
 *
 * Should always be wrapped by `GridRow`. Will always render a column at full width if
 * the browser width is below the `TABLET` breakpoint.
 *
 * NB our grid is based on flex-box, which differs from govuk-frontend, which instead uses
 * floats, however it is otherwise similar to use.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/grid-col
 *
 */
const GridCol = styled__default["default"]('div').withConfig({
  displayName: "src__GridCol",
  componentId: "sc-gufadr-0"
})({
  boxSizing: 'border-box',
  paddingRight: constants.GUTTER_HALF,
  paddingLeft: constants.GUTTER_HALF
}, props => {
  // if setWidth is set, then columnOneQuarter etc props will be ignored
  let widthStyle = widthFromProps(props);
  if (!widthStyle) {
    let widthValue;
    Object.entries(props).forEach(_ref => {
      let [key, value] = _ref;
      if (colValues[key] && value === true) {
        const newKey = key.replace('column', '').replace(/^([A-Z][a-z]+)([A-Z])/, '$1-$2').toLocaleLowerCase();
        // eslint-disable-next-line no-console
        console.warn(`deprecated prop ${key} used in GridCol, please replace with setWidth="${newKey}"`);
        widthValue = colValues[key];
      }
    });
    widthStyle = {
      [constants.MEDIA_QUERIES.TABLET]: {
        width: widthValue
      }
    };
  }
  widthStyle[constants.MEDIA_QUERIES.TABLET] = setGrowShrink(widthStyle[constants.MEDIA_QUERIES.TABLET]);
  const desktopWidthStyle = desktopWidthFromProps({
    setWidth: props.setDesktopWidth
  });
  if (desktopWidthStyle) {
    desktopWidthStyle[constants.MEDIA_QUERIES.DESKTOP] = setGrowShrink(desktopWidthStyle[constants.MEDIA_QUERIES.DESKTOP]);
  }
  return {
    ...widthStyle,
    ...desktopWidthStyle
  };
});
GridCol.defaultProps = {
  children: undefined,
  columnOneQuarter: false,
  columnOneThird: false,
  columnOneHalf: false,
  columnTwoThirds: false,
  columnThreeQuarters: false,
  columnFull: false,
  setWidth: undefined,
  setDesktopWidth: undefined
};
GridCol.displayName = 'GridCol';

exports.GridCol = GridCol;
exports["default"] = GridCol;
