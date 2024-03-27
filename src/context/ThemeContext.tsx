import { createContext } from "react";

interface IThemeContext {
  cms: any;
  ddei: any;
  enriched: any;
  contactApp: any;
  mg: any;
}

const ThemeContext = createContext<IThemeContext>({
  cms: {},
  ddei: {},
  enriched: {},
  contactApp: {},
  mg: {},
});

export default ThemeContext;
