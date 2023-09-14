const primitiveTokens = [
  0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 3.5, 4, 8, -0.25, -0.5, -0.75,
  -1, -1.25, -1.5, -2, -2.5, -3, -3.5, -4, -8,
] as const;

export type CharRelativeSize = (typeof primitiveTokens)[number];
