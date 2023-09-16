import { CreatedPaletteTheme } from "./createPalette";
import { CreatedColorTheme } from "./createColor";
import { CreatedSizeTheme } from "./createSize";
import { CreatedFontSizeTheme } from "./createFontSize";
import { CreatedLeading } from "./createLeading";
import {
  CreatedSpacingTheme,
  CreatedSpacingByCharTheme,
} from "./createSpacing";
import { CreatedBreakpointTheme } from "./createBreakpoint";

export interface CreatedTheme {
  /**
   * @deprecated The palette property will be deprecated, please use color property instead
   */
  palette: CreatedPaletteTheme;
  color: CreatedColorTheme;
  /**
   * @deprecated The size property will be deprecated, please use fontSize, spacing or breakpoint property instead
   */
  size: CreatedSizeTheme;
  fontSize: CreatedFontSizeTheme;
  leading: CreatedLeading;
  spacing: CreatedSpacingTheme;
  spacingByChar: CreatedSpacingByCharTheme;
  space: CreatedSpacingByCharTheme;
  breakpoint: CreatedBreakpointTheme;
}
