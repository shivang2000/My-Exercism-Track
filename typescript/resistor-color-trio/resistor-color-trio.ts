export function decodedResistorValue(colors: string[]): string {
  const power =
    colors
      .slice(0, 2)
      .reduce((acc, color) => acc * 10 + COLORS.indexOf(color), 0) *
    Math.pow(10, COLORS.indexOf(colors[2]));

  if (power >= 1e9) {
    return power / 1e9 + " gigaohms";
  }
  if (power >= 1e6) {
    return power / 1e6 + " megaohms";
  }

  return power > 1000 ? power / 1000 + " kiloohms" : power + " ohms";
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
