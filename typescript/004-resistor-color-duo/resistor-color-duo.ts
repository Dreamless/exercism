export enum RESISTOR_VALUES {
  black = 0,
  brown = 1,
  red = 2,
  orange = 3,
  yellow = 4,
  green = 5,
  blue = 6,
  violet = 7,
  grey = 8,
  white = 9,
}

type Colors = keyof typeof RESISTOR_VALUES;

export function decodedValue([color1, color2]: Colors[]): number {
  return RESISTOR_VALUES[color1] * 10 + RESISTOR_VALUES[color2];
}
