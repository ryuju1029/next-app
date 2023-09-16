export interface CreatedFontSizeTheme {
  /** @deprecated You shouldn't use rem except for font size. use calc. */
  pxToRem: (px: number) => string;
  /** @deprecated */
  SHORT: number;
  /** @deprecated */
  TALL: number;
  /** @deprecated */
  GRANDE: number;
  /** @deprecated */
  VENTI: number;
  XXS: string;
  XS: string;
  S: string;
  M: string;
  L: string;
  XL: string;
  XXL: string;
}
