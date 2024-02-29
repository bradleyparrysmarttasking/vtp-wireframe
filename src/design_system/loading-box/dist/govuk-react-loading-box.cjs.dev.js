'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var reactTransitionGroup = require('react-transition-group');
var hexRgb = require('hex-rgb');
var icons = require('@govuk-react/icons');
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
var hexRgb__default = /*#__PURE__*/_interopDefault(hexRgb);

const spinnerClassName = 'icon-loading';
const StyledContainer = styled__default["default"]('div').withConfig({
  displayName: "src__StyledContainer",
  componentId: "sc-gm1edz-0"
})({
  position: 'relative',
  paddingBottom: '2px',
  minHeight: '10px'
});
const Innerwrap = styled__default["default"]('div').withConfig({
  displayName: "src__Innerwrap",
  componentId: "sc-gm1edz-1"
})(_ref => {
  let {
    timeIn,
    timeOut,
    backgroundColor,
    backgroundColorOpacity
  } = _ref;
  return {
    position: 'absolute',
    height: '100%',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    [`& .${spinnerClassName}`]: {
      position: 'absolute',
      zIndex: 101,
      opacity: 1,
      display: 'block',
      height: '100%',
      maxHeight: 'calc(50vh + 100px)',
      transition: `opacity ${timeIn}ms ease-in-out`,
      willChange: 'opacity'
    },
    '& .overlay': {
      zIndex: 100,
      transition: `background-color ${timeIn}ms ease-in-out`,
      willChange: 'background-color',
      backgroundColor: `rgba(
      ${hexRgb__default["default"](backgroundColor).red},
      ${hexRgb__default["default"](backgroundColor).blue},
      ${hexRgb__default["default"](backgroundColor).green},
      ${backgroundColorOpacity})`
    },
    '&.fade-enter': {
      '& .overlay': {
        backgroundColor: `rgba(
        ${hexRgb__default["default"](backgroundColor).red},
        ${hexRgb__default["default"](backgroundColor).blue},
        ${hexRgb__default["default"](backgroundColor).green},
        0)`,
        transitionDuration: `${timeIn}ms`
      },
      [`& .${spinnerClassName}`]: {
        opacity: 0,
        transitionDuration: `${timeIn}ms`,
        transitionDelay: `${timeIn / 2}ms`
      }
    },
    '&.fade-enter-active': {
      '& .overlay': {
        backgroundColor: `rgba(
        ${hexRgb__default["default"](backgroundColor).red},
        ${hexRgb__default["default"](backgroundColor).blue},
        ${hexRgb__default["default"](backgroundColor).green},
        ${backgroundColorOpacity})`,
        transitionDuration: `${timeIn}ms`
      },
      [`& .${spinnerClassName}`]: {
        opacity: 1,
        transitionDuration: `${timeIn}ms`,
        transitionDelay: `${timeIn / 2}ms`
      }
    },
    '&.fade-exit': {
      '& .overlay': {
        backgroundColor: `rgba(
        ${hexRgb__default["default"](backgroundColor).red},
        ${hexRgb__default["default"](backgroundColor).blue},
        ${hexRgb__default["default"](backgroundColor).green},
        ${backgroundColorOpacity})`,
        transitionDuration: `${timeOut}ms`
      },
      [`& .${spinnerClassName}`]: {
        opacity: 1,
        transitionDuration: `${timeOut}ms`
      }
    },
    '&.fade-exit-active': {
      '& .overlay': {
        backgroundColor: `rgba(
        ${hexRgb__default["default"](backgroundColor).red},
        ${hexRgb__default["default"](backgroundColor).blue},
        ${hexRgb__default["default"](backgroundColor).green},
        0)`,
        transitionDuration: `${timeOut}ms`
      },
      [`& .${spinnerClassName}`]: {
        opacity: 0,
        transitionDuration: `${timeOut}ms`
      }
    }
  };
});
const Overlay = styled__default["default"]('div').withConfig({
  displayName: "src__Overlay",
  componentId: "sc-gm1edz-2"
})({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflow: 'hidden',
  height: '100%',
  width: '100%'
});

/**
 * Use a LoadingBox to wrap components that can asyncronously load content.
 *
 * When `loading` is set to `true`, a spinner will overlay the contents to give visual feedback to the user.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/loading-box
 */
const LoadingBox = _ref2 => {
  let {
    children,
    backgroundColor,
    backgroundColorOpacity,
    title,
    loading,
    spinnerColor,
    timeIn,
    timeOut,
    ...props
  } = _ref2;
  const nodeRef = React__namespace.useRef(null);
  return /*#__PURE__*/React__namespace.createElement(StyledContainer, props, /*#__PURE__*/React__namespace.createElement(reactTransitionGroup.CSSTransition, {
    nodeRef: nodeRef,
    timeout: timeOut,
    classNames: "fade",
    in: loading,
    unmountOnExit: true
  }, /*#__PURE__*/React__namespace.createElement(Innerwrap, {
    ref: nodeRef,
    backgroundColor: backgroundColor,
    backgroundColorOpacity: backgroundColorOpacity,
    timeIn: timeIn,
    timeOut: timeOut
  }, /*#__PURE__*/React__namespace.createElement(icons.Spinner, {
    title: title,
    className: spinnerClassName,
    fill: spinnerColor,
    width: "50px",
    height: "50px"
  }), /*#__PURE__*/React__namespace.createElement(Overlay, {
    className: "overlay"
  }))), children);
};
LoadingBox.defaultProps = {
  spinnerColor: govukColours.BLACK,
  backgroundColor: govukColours.WHITE,
  backgroundColorOpacity: 0.85,
  title: undefined,
  loading: false,
  timeIn: 800,
  timeOut: 200
};
LoadingBox.displayName = 'LoadingBox';

exports.LoadingBox = LoadingBox;
exports["default"] = LoadingBox;
