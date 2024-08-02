export class SectorCode {
  private constructor(private value: string) {
  }

  public static create(code: string) {
    return new SectorCode(code);
  }

  public getValue() {
    return this.value;
  }
}
