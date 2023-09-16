export interface CreatedSizeTheme {
  pxToRem: (value: number) => string;
  space: {
    XXS: number;
    XS: number;
    S: number;
    M: number;
    L: number;
    XL: number;
    XXL: number;
  };
  font: {
    SHORT: number;
    TALL: number;
    GRANDE: number;
    VENTI: number;
  };
  mediaQuery: {
    SP: number;
    TABLET: number;
  };
}
