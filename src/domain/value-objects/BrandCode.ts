import { Rules } from "../../common/enums/rules";
import InvalidArgumentException from "../exceptions/validation/invalid-argument"

export default class BrandCode {
  private constructor(private value: string) {
  }

  public static create(code: string) {
    if (code.length > 3) {
      throw new InvalidArgumentException('code', Rules.invalidSize);
    }

    return new BrandCode(code);
  }

  public static restore(code: string) {
    return new BrandCode(code);
  }

  public getValue() {
    return this.value;
  }
}
