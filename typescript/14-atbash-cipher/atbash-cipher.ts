export function encode(plainText: string): string {
  return translatedSymbols(plainText).replace(/(.{5})(?=.)/g, '$1 ');
}

export function decode(cipherText: string): string {
  return translatedSymbols(cipherText);
}

function translatedSymbols(text: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const normalizedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  let encodedText = "";

  for (let i = 0; i < normalizedText.length; i++) {
    const letterIdx: number = alphabet.indexOf(normalizedText[i]);
    if (letterIdx !== -1) {
      const letterIndex = (alphabet.length - 1) - letterIdx;
      encodedText += alphabet[letterIndex];
    } else {
      encodedText += normalizedText[i];
    }
  }

  return encodedText.trim();
}
