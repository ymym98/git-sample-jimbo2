export class Car {
  constructor(private _speed: number, private _name: number) {}

  public get speed(): number {
    return this._speed;
  }

  public set speed(speed: number) {
    this._speed = speed;
  }

  public get name(): number {
    return this._name;
  }

  public set name(name: number) {
    this._name = name;
  }
}
