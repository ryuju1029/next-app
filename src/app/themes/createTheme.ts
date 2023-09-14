import { CreatedPaletteTheme } from "./CreatedPaletteTheme";

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
  /**
   * @deprecated The frame property will be deprecated, please use border or radius property instead
   */
  frame: CreatedFrameTheme;
  border: CreatedBorderTheme;
  radius: CreatedRadiusTheme;
  interaction: CreatedInteractionTheme;
  shadow: CreatedShadowTheme;
  zIndex: CreatedZindexTheme;
}
