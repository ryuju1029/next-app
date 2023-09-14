import { useContext } from "react";

export type Theme = CreatedTheme;

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
