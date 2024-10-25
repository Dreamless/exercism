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

export enum SI_PREFIXES {
	ohms = 10 ** 1,
	kilo = 10 ** 3,
	mega = 10 ** 6,
	giga = 10 ** 9,
}

type Colors = keyof typeof RESISTOR_VALUES;
type SI = keyof typeof SI_PREFIXES;

export function decodedValue([color1, color2]: Colors[]): number {
	return RESISTOR_VALUES[color1] * 10 + RESISTOR_VALUES[color2];
}

// function decodeOhms(value: number): SI {
// 	switch (value) {
// 		case 2:
// 		case 3:
// 		case 4:
// 		case 5:
// 			return "kilo";
// 		case 6:
// 		case 7:
// 		case 8:
// 			return "mega";
// 		case 9:
// 			return "giga";
// 		default:
// 			return "ohms";
// 	}
// }

export function decodedResistorValue([color1, color2, color3]: Colors[]): string {
	const exponent = 10 ** RESISTOR_VALUES[color3];
	if (RESISTOR_VALUES[color3] <= RESISTOR_VALUES["brown"]) {
		return `${decodedValue([color1, color2]) * exponent} ohms`;
	}

	let measurement: keyof typeof SI_PREFIXES = "kilo";
	if (RESISTOR_VALUES[color3] < RESISTOR_VALUES["blue"]) {
		measurement = "kilo";
	} else if (RESISTOR_VALUES[color3] < RESISTOR_VALUES["violet"]) {
		measurement = "mega";
	} else {
		measurement = "giga";
	}

  return `${decodedValue([color1, color2]) * exponent / SI_PREFIXES[measurement]} ${measurement}ohms`;
}
