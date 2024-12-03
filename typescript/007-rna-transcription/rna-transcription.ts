export function toRna(dnaSequence: string): string {
  const transcriptionMap = new Map<string, string>([
    ['G', 'C'],
    ['C', 'G'],
    ['T', 'A'],
    ['A', 'U'],
  ]);

  return dnaSequence.split('').map(nucleotide => {
    if (!transcriptionMap.get(nucleotide)) {
      throw new Error(`Invalid input DNA.`);
    }
    return transcriptionMap.get(nucleotide);
  }).join('');
}
