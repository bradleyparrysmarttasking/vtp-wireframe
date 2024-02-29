import styled from 'styled-components';
import { link } from '@govuk-react/lib';

/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_links.scss
 */
/**
 * Link/Anchor element.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/link
 * - https://design-system.service.gov.uk/styles/typography/#links
 */
const Link = styled('a').withConfig({
  shouldForwardProp: prop => !['noVisitedState', 'textColour', 'muted'].includes(prop),
  displayName: "src__Link",
  componentId: "sc-1loawqx-0"
})(...link.common(), link.styleDefault, link.printFriendly, _ref => {
  let {
    muted
  } = _ref;
  return muted ? link.styleMuted : undefined;
}, _ref2 => {
  let {
    textColour
  } = _ref2;
  return textColour ? link.styleText : undefined;
}, _ref3 => {
  let {
    noVisitedState
  } = _ref3;
  return noVisitedState ? link.styleNoVisitedState : undefined;
});
Link.defaultProps = {
  muted: false,
  textColour: false,
  noVisitedState: false
};
Link.displayName = 'Link';

export { Link, Link as default };
