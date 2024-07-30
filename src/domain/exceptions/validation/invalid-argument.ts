export default class InvalidArgumentException {
  public constructor(public readonly field: string, public readonly rule: string) {
  }
}
