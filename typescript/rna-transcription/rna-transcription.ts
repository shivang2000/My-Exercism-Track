export function toRna(dna: string) {
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    const value = dna[i];
    switch (value) {
      case "C":
        rna += "G";
        break;
      case "G":
        rna += "C";
        break;
      case "A":
        rna += "U";
        break;
      case "T":
        rna += "A";
        break;
      default:
        throw new Error("Invalid input DNA.");
    }
  }
  return rna;
}
