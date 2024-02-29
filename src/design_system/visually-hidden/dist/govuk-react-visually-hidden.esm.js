import styled from 'styled-components';
import { visuallyHidden } from '@govuk-react/lib';

/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/helpers/_visually-hidden.scss
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/utilities/_visually-hidden.scss
 */

/**
 * Hide an element visually, but have it available for screen readers.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/visually-hidden
 */
const VisuallyHidden = styled('span').withConfig({
  shouldForwardProp: prop => !['important', 'focusable'].includes(prop),
  displayName: "src__VisuallyHidden",
  componentId: "sc-nxwj55-0"
}).attrs(_ref => {
  let {
    focusable,
    tabIndex
  } = _ref;
  return (
    // if we're focusable but don't have a `tabIndex` set, add one
    focusable && tabIndex === undefined ? {
      tabIndex: '0'
    } : undefined
  );
})(_ref2 => {
  let {
    focusable,
    important
  } = _ref2;
  return visuallyHidden({
    focusable,
    important
  });
});
VisuallyHidden.defaultProps = {
  focusable: false,
  important: true
};
VisuallyHidden.displayName = 'VisuallyHidden';

export { VisuallyHidden, VisuallyHidden as default };
