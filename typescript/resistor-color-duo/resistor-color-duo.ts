export function decodedValue(colors: string[]): number {
  return colors
    .slice(0, 2)
    .reduce((acc, color) => acc * 10 + COLORS.indexOf(color), 0);
}

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
