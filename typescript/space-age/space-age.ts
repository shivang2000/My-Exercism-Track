export function age(planet: string, seconds: number): number {
  switch (planet) {
    case "earth":
      return parseFloat((seconds / 31557600).toFixed(2));
    case "mercury":
      return parseFloat((seconds / (31557600 * 0.2408467)).toFixed(2));
    case "venus":
      return parseFloat((seconds / (31557600 * 0.61519726)).toFixed(2));
    case "mars":
      return parseFloat((seconds / (31557600 * 1.8808158)).toFixed(2));
    case "jupiter":
      return parseFloat((seconds / (31557600 * 11.862615)).toFixed(2));
    case "saturn":
      return parseFloat((seconds / (31557600 * 29.447498)).toFixed(2));
    case "uranus":
      return parseFloat((seconds / (31557600 * 84.016846)).toFixed(2));
    case "neptune":
      return parseFloat((seconds / (31557600 * 164.79132)).toFixed(2));
    default:
      throw new Error("Unknown planet");
  }
}
