import * as React from 'react';
import styled from 'styled-components';
import { IconImportant } from '@govuk-react/icons';
import { spacing, typography } from '@govuk-react/lib';
import { SPACING_POINTS } from '@govuk-react/constants';

/**
 * ### References:
 *
 * - https://govuk-elements.herokuapp.com/typography/#typography-warning-text
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/warning-text
 */
const StyledWarningText = styled('div').withConfig({
  displayName: "src__StyledWarningText",
  componentId: "sc-14ghfbq-0"
})({
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'flex',
  width: '100%'
}, spacing.withWhiteSpace({
  marginBottom: 0
}));
const IconImportantWrapper = styled('div').withConfig({
  displayName: "src__IconImportantWrapper",
  componentId: "sc-14ghfbq-1"
})({
  flex: 'none',
  height: 35,
  marginRight: SPACING_POINTS[3],
  width: 35
});
const WarningTextWrapper = styled('strong').withConfig({
  displayName: "src__WarningTextWrapper",
  componentId: "sc-14ghfbq-2"
})(typography.font({
  size: 19,
  weight: 'bold'
}));

/**
 * Use the warning text component when you need to warn users about something important, such as legal consequences of an action, or lack of action, that they might take.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/warning-text
 * - https://design-system.service.gov.uk/components/warning-text/
 */
const WarningText = _ref => {
  let {
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledWarningText, props, /*#__PURE__*/React.createElement(IconImportantWrapper, null, /*#__PURE__*/React.createElement(IconImportant, null)), /*#__PURE__*/React.createElement(WarningTextWrapper, null, children));
};
WarningText.displayName = 'WarningText';

export { WarningText, WarningText as default };
