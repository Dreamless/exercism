export function toRna(dnaSequence: string): string {
	const transcriptionMap: { [key: string]: string } = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' };
	return dnaSequence.split('').map(nucleotide => {
		if (!transcriptionMap[nucleotide]) {
			throw new Error(`Invalid input DNA.`);
		}
		return transcriptionMap[nucleotide];
	}).join('');
}
