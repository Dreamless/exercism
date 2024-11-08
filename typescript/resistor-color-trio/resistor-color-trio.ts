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

export const SI_PREFIXES: string[] = ["ohms", "kiloohms", "megaohms", "gigaohms"]

export function decodedValue(color1: Colors, color2: Colors): number {
	return RESISTOR_VALUES[color1] * 10 + RESISTOR_VALUES[color2];
}

export function decodedResistorValue([color1, color2, color3]: Colors[]): string {
	let rawVal: number = decodedValue(color1, color2);
	let exp: number = RESISTOR_VALUES[color3];

	if (rawVal % 10 === 0) {
		rawVal /= 10;
		exp += 1;
	}

	const expOffset = Math.floor(exp / 3);
	const finalExp = exp - expOffset * 3;
	const finalSuffix = SI_PREFIXES[expOffset];

	const multiplier: number = 10 ** finalExp;
	const result = rawVal * multiplier;

	return `${result} ${finalSuffix}`;
}
