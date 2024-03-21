import { createContext } from "react";

interface IThemeContext {
  cms: any;
  ddei: any;
  enriched: any;
  contactApp: any;
}

const ThemeContext = createContext<IThemeContext>({
  cms: {},
  ddei: {},
  enriched: {},
  contactApp: {},
});

export default ThemeContext;
