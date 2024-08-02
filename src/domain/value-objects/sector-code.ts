import { Rules } from "../../common/enums/rules";
import InvalidArgumentException from "../exceptions/validation/invalid-argument";

export class SectorCode {
  private constructor(private value: string) {
  }

  public static create(code: string) {
    if (code.length > 2) {
      throw new InvalidArgumentException('code', Rules.invalidSize);
    }

    return new SectorCode(code);
  }

  public static restore(code: string) {
    return new SectorCode(code);
  }

  public getValue() {
    return this.value;
  }
}
