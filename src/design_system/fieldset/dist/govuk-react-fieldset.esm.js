import * as React from 'react';
import styled from 'styled-components';
import { spacing, typography } from '@govuk-react/lib';
import { SPACING_POINTS, HEADING_SIZES } from '@govuk-react/constants';

const StyledLegend = styled('legend').withConfig({
  displayName: "legend__StyledLegend",
  componentId: "sc-12rap65-0"
})(spacing.withWhiteSpace(), typography.font({
  size: 19
}), typography.textColour, {
  boxSizing: 'border-box',
  display: 'table',
  maxWidth: '100%',
  marginBottom: SPACING_POINTS[2],
  padding: 0,
  // Disabling this as per https://github.com/alphagov/govuk-frontend/issues/1239
  // overflow: 'hidden',
  whiteSpace: 'normal'
}, _ref => {
  let {
    size
  } = _ref;
  const actualSize = Number.isNaN(Number(size)) ? HEADING_SIZES[size] : size;
  if (size !== undefined && !actualSize) {
    throw Error(`Unknown size ${size} used for legend.`);
  }
  if (!actualSize) {
    return undefined;
  }
  return {
    ...typography.font({
      size: actualSize,
      weight: 'bold'
    }),
    ...(actualSize > 19 ? {
      marginBottom: SPACING_POINTS[3]
    } : undefined)
  };
});
const StyledHeading = styled('h1').withConfig({
  displayName: "legend__StyledHeading",
  componentId: "sc-12rap65-1"
})({
  margin: 0,
  fontSize: 'inherit',
  fontWeight: 'inherit'
});

// // When the legend contains an H1, we want the H1 to inherit all styles from
// // the legend. Effectively we want to be able to treat the heading as if it is
// // not there.
// .govuk-fieldset__heading {
//   margin: 0;
//   font-size: inherit;
//   font-weight: inherit;
// }

const Legend = _ref2 => {
  let {
    children,
    isPageHeading = undefined,
    ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement(StyledLegend, props, isPageHeading ? /*#__PURE__*/React.createElement(StyledHeading, null, children) : children);
};
Legend.defaultProps = {
  isPageHeading: false,
  size: undefined
};
Legend.displayName = 'Fieldset.Legend';

/**
 * ### References
 *
 * - https://design-system.service.gov.uk/components/fieldset/
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/fieldset
 * - https://design-system.service.gov.uk/get-started/labels-legends-headings/
 */
const StyledFieldset = styled('fieldset').withConfig({
  displayName: "src__StyledFieldset",
  componentId: "sc-1j46mnv-0"
})({
  border: 0,
  '&:after': {
    content: '""',
    display: 'block',
    clear: 'both'
  }
}, spacing.withWhiteSpace({
  margin: 0,
  padding: 0
}));

/**
 * Use the fieldset component when you need to show a relationship between multiple
 * form inputs. For example, you may need to group a set of text inputs into a single
 * fieldset when [asking for an address](https://design-system.service.gov.uk/patterns/addresses).
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/fieldset
 * - https://design-system.service.gov.uk/components/fieldset/
 */
const Fieldset = props => /*#__PURE__*/React.createElement(StyledFieldset, props);
Fieldset.Legend = Legend;
Fieldset.displayName = 'Fieldset';

export { Fieldset, Fieldset as default };
