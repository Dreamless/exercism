export class Clock {
  private readonly hour: number;
  private readonly minute: number;

  constructor(hour: number, minute: number = 0) {
    const minInDay = 1440;
    const totalMinutes = (((hour * 60 + minute) % minInDay) + minInDay) % minInDay;
    this.hour = Math.floor(totalMinutes / 60);
    this.minute = totalMinutes % 60;
  }

  public toString(): string {
    return `${this.hour.toString().padStart(2, '0')}:${this.minute.toString().padStart(2, '0')}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(this.hour, this.minute + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(this.hour, this.minute - minutes);
  }

  public equals(other: Clock): boolean {
    return this.hour === other.hour && this.minute === other.minute;
  }
}
