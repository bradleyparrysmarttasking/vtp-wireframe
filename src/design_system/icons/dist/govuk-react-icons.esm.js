import * as React from 'react';
import React__default from 'react';
import styled, { keyframes } from 'styled-components';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledSvg = styled('svg').withConfig({
  displayName: "SVGBase__StyledSvg",
  componentId: "sc-16k4s64-0"
})({
  display: 'block'
});
const SVG = _ref => {
  let {
    children,
    title,
    ...rest
  } = _ref;
  return /*#__PURE__*/React__default.createElement(StyledSvg, _extends({
    version: "1.1",
    height: "100%"
  }, rest), /*#__PURE__*/React__default.createElement("title", null, title), children);
};
SVG.defaultProps = {
  children: undefined,
  title: undefined,
  fill: 'currentColor',
  width: '100%'
};

const ArrowLeft = _ref => {
  let {
    fill,
    title,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(SVG, _extends({
    viewBox: "-0.2 0 17 14",
    title: title,
    fill: fill
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"
  }));
};
ArrowLeft.defaultProps = {
  title: 'arrow left',
  fill: 'currentColor'
};

const ArrowRight = _ref => {
  let {
    fill,
    title,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(SVG, _extends({
    viewBox: "0 0 17 14",
    title: title,
    fill: fill
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "m10.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"
  }));
};
ArrowRight.defaultProps = {
  title: 'arrow right',
  fill: 'currentColor'
};

const IconImportant = _ref => {
  let {
    fill,
    title,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(SVG, _extends({
    viewBox: "0 0 35.000000 35.000000",
    preserveAspectRatio: "xMidYMid meet",
    title: title,
    fill: fill
  }, rest), /*#__PURE__*/React.createElement("g", {
    transform: "translate(0.000000,35.000000) scale(0.100000,-0.100000)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M100 332 c-87 -48 -125 -155 -82 -232 48 -87 155 -125 232 -82 87 48\n125 155 82 232 -48 87 -155 125 -232 82z m100 -122 c0 -53 -2 -60 -20 -60 -18\n0 -20 7 -20 60 0 53 2 60 20 60 18 0 20 -7 20 -60z m0 -111 c0 -12 -7 -19 -20\n-19 -19 0 -28 28 -14 43 11 11 34 -5 34 -24z"
  })));
};
IconImportant.defaultProps = {
  title: 'icon important',
  fill: 'currentColor'
};

const Search = _ref => {
  let {
    fill,
    title,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(SVG, _extends({
    viewBox: "0 0 57 57",
    title: title,
    fill: fill
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z"
  }));
};
Search.defaultProps = {
  title: 'Search',
  fill: 'currentColor'
};

const fadeInOut = keyframes(["0%{opacity:0.250075;}0.01%{opacity:0.25;}0.03%{opacity:1;}100%{opacity:0.250075;}"]);
const Rect = styled.rect.withConfig({
  displayName: "Spinner__Rect",
  componentId: "sc-1f5b0zr-0"
})(["animation:", " 1s infinite linear;animation-delay:", "ms;"], fadeInOut, props => props.animationDelay * 83);
const Spinner = _ref => {
  let {
    className,
    fill,
    title,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(SVG, _extends({
    className: className,
    viewBox: "-25 -25 50 50",
    preserveAspectRatio: "xMidYMid meet",
    title: title,
    fill: fill
  }, rest), Array(12).fill(1).map((el, i) => /*#__PURE__*/React.createElement(Rect, {
    fill: fill,
    width: "12",
    height: "5",
    rx: "2.5",
    ry: "2.5",
    animationDelay: i,
    transform: `rotate(${i * 30}, 0, 2) translate(10 0)`,
    opacity: "0"
    /* eslint-disable-next-line react/no-array-index-key */,
    key: i
  })));
};
Spinner.defaultProps = {
  className: 'icon-spinner',
  title: 'Loading',
  fill: 'currentColor'
};

const ButtonArrow = _ref => {
  let {
    fill,
    title,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(SVG, _extends({
    viewBox: "0 0 706 860",
    title: title,
    fill: fill
  }, rest), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M.152 0h252.993l452.108 430H452.261z"
  }), /*#__PURE__*/React.createElement("path", {
    fillOpacity: "0.5",
    d: "M0 860h252.993L705.1 430H452.108z"
  })));
};
ButtonArrow.defaultProps = {
  title: 'ButtonArrow',
  fill: 'currentColor'
};

export { ArrowLeft, ArrowRight, ButtonArrow, IconImportant, SVG as SVGBase, Search, Spinner };
