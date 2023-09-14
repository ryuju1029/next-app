import * as React from "react";

export const ThemeContext = React.createContext<CreatedTheme>(createTheme());
const { Provider } = ThemeContext;

interface Props {
  theme: CreateTheme;
  children?: React.ReactNode;
}

export const ThemeProvider: React.VFC<Props> = ({ theme, children }) => (
  <Provider value={theme}>{children}</Provider>
);
