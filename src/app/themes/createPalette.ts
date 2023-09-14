export interface CreatedPaletteTheme {
  hoverColor: (value: string, darkenAmount?: 0.05 | 0.15) => string;
  disableColor: (value: string) => string;
  TEXT_BLACK: string;
  TEXT_GREY: string;
  TEXT_DISABLED: string;
  TEXT_LINK: string;
  BORDER: string;
  ACTION_BACKGROUND: string;
  BACKGROUND: string;
  COLUMN: string;
  OVER_BACKGROUND: string;
  HEAD: string;
  BASE_GREY: string;
  MAIN: string;
  DANGER: string;
  WARNING: string;
  SCRIM: string;
  OVERLAY: string;
  BRAND: string;
  OUTLINE: string;
}
