export interface CreatedSpacingTheme {
  X3S: string;
  XXS: string;
  XS: string;
  S: string;
  M: string;
  L: string;
  XL: string;
  XXL: string;
  X3L: string;
}

export type CreatedSpacingByCharTheme = (size: CharRelativeSize) => string;

const primitiveTokens = [
  0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 3.5, 4, 8, -0.25, -0.5, -0.75,
  -1, -1.25, -1.5, -2, -2.5, -3, -3.5, -4, -8,
] as const;

export type CharRelativeSize = (typeof primitiveTokens)[number];
