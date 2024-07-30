import { Rules } from "../../common/enums/rules";
import InvalidArgumentException from "../exceptions/validation/invalid-argument";

type CreateProps = {
  brandCode: string;
  sectorCode: string;
  productCode: number;
}

export default class Sku {
  private constructor(
    private brandCode: string,
    private sectorCode: string,
    private productCode: number,
  ) {
  }

  public static create({ brandCode, productCode, sectorCode }: CreateProps) {
    if (brandCode.length !== 3) {
      throw new InvalidArgumentException('brandCode', Rules.invalidSize);
    }
    if (sectorCode.length !== 2) {
      throw new InvalidArgumentException('sectoCode', Rules.invalidSize);
    }

    return new Sku(brandCode, sectorCode, productCode);
  }

  public static restore({ brandCode, productCode, sectorCode }: CreateProps) {
    return new Sku(brandCode, sectorCode, productCode);
  }

  public getBrandCode() {
    return this.brandCode;
  }

  public getSectorCode() {
    return this.sectorCode;
  }

  public getProductCode() {
    return this.productCode;
  }

  private stringfiedProductCode() {
    return `00${this.productCode}`.substring(-1);
  }

  public toString() {
    return `${this.brandCode}${this.sectorCode}${this.stringfiedProductCode()}`;
  }
}
