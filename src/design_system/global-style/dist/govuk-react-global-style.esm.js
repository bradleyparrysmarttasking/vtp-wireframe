import { createGlobalStyle } from 'styled-components';

/**
 * A Styled Component to apply global style for use with govuk-react.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/global-style
 */
const GlobalStyle = createGlobalStyle(["body{padding:0;margin:0;font-family:'Inter UI',Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}"]);
GlobalStyle.displayName = 'GlobalStyle';

export { GlobalStyle, GlobalStyle as default };
