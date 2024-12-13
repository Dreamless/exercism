export class Robot {
  private static usedNames: Set<string> = new Set();
  private _name: string | null = null;
  private static serialNumber = 0;

  constructor() {}

  private static generateUniqueName(): string {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const firstLetter = letters[Math.floor(this.serialNumber / letters.length)];
    const secondLetter = letters[this.serialNumber % letters.length];
    const generateSerialNumber = this.serialNumber.toString().padStart(3, '0');

    let name = firstLetter + secondLetter + generateSerialNumber;
    // const generateRandomName = (qty: number): string => {
    //   //const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //   let str = "";
    //   while (str.length < qty) {
    //     str += letters[Math.floor(Math.random() * letters.length)];
    //   }
    //   return str;
    // }
    //
    // do {
    //   name = firstLetter + secondLetter + generateSerialNumber;
    // } while (this.usedNames.has(name));

    this.usedNames.add(name);
    this.serialNumber++;
    return name;
  }

  public get name(): string {
    if (!this._name) {
      this._name = Robot.generateUniqueName();
    }
    return this._name;
  }

  public resetName(): void {
    this._name = null;
  }

  public static releaseNames(): void {
    this.usedNames.clear();
  }
}
