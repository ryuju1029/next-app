import { CharRelativeSize } from "../themes/createSpacing";

export const useSpacing = (size: CharRelativeSize) => {
  const { spacing, spacingByChar } = useTheme();

  if (typeof size === "number") {
    return spacingByChar(size);
  } else if (typeof size === "string") {
    return spacing[size];
  } else {
    return "0";
  }
};
