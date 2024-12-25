export class Robot {
  private _name: string | null = null;
  private static allNames: string[];

  constructor() {
    Robot.allNames = Robot.generateAllNames();
  }

  private static generateAllNames(): string[] {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const allNames: string[] = [];

    for (const firstLetter of letters) {
      for (const secondLetter of letters) {
        for (let numIndex = 0; numIndex < 1000; numIndex++) {
          allNames.push(`${firstLetter}${secondLetter}${numIndex.toString().padStart(3, '0')}`);
        }
      }
    }

    return allNames;
  }

  // private static generateUniqueName(): string {
  //   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   const firstLetter = letters[Math.floor(this.serialNumber / letters.length)];
  //   const secondLetter = letters[this.serialNumber % letters.length];
  //   const generateSerialNumber = this.serialNumber.toString().padStart(3, '0');
  //
  //
  //   let name = this.allNames;
  //   // const generateRandomName = (qty: number): string => {
  //   //   //const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   //   let str = "";
  //   //   while (str.length < qty) {
  //   //     str += letters[Math.floor(Math.random() * letters.length)];
  //   //   }
  //   //   return str;
  //   // }
  //   //
  //   // do {
  //   //   name = firstLetter + secondLetter + generateSerialNumber;
  //   // } while (this.usedNames.has(name));
  //
  //   this.usedNames.add(name);
  //   this.serialNumber++;
  //   return name;
  // }

  public get name(): string {
    //const randomNameIndex = Math.floor(Math.random() * Robot.allNames.length);
    if (!this._name) {
      this._name = Robot.allNames;
    }
    return this._name;
  }

  public resetName(): void {
    this._name = null;
  }

  public static releaseNames(): void {
    this.allNames = [];
  }
}
