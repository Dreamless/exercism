export function isPangram(str: string): boolean {
  const alphabetSize = 26;
  const normalizedStr = str.toLowerCase().replace(/[^a-z]/g, '');
  const alphabet: Set<string> = new Set(normalizedStr);

  return alphabet.size === alphabetSize;
}
