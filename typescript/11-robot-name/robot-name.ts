export class Robot {
  private static usedNames: Set<string> = new Set();
  private _name: string | null = null;
  private static serialNumber = 0;

  constructor() {}

  private static generateAllNames(): string[] {
    let allNames: string[] = [];
    for (let i = 0; i < 677; i++) {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const firstLetter = letters[Math.floor(i / letters.length)];
      const secondLetter = letters[i % letters.length];
      const names: string[]  = Array.from({ length: 1000 }, (_, index) => {
        return firstLetter + secondLetter + index;
      });
      allNames = allNames.concat(names);
    }
    return allNames;
  }

  private static generateUniqueName(): string {
    this.generateAllNames();
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
