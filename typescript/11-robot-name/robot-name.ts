export class Robot {
  private static usedNames: Set<string> = new Set();
  private _name: string | null = null;

  constructor() {}

  private static generateRandomName(): string {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetters = (qty: number): string => {
      let str = "";
      while (str.length < qty) {
        str += letters[Math.floor(Math.random() * letters.length)];
      }
      return str;
    }

    const randomDigits = (qty: number): string => {
      let num = "";
      while (num.length < qty) {
        num +=  Math.floor(Math.random() * 10).toString();
      }
      return num;
    }

    return `${randomLetters(2)}${randomDigits(3)}`;
  }

  private static generateUniqueName(): string {
    let name: string;
    do {
      name = this.generateRandomName();
    } while (this.usedNames.has(name));

    this.usedNames.add(name);
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
