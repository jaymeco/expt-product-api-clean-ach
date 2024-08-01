import BrandCode from "../value-objects/BrandCode";
import Uuid from "../value-objects/uuid";

type Value = {
  description: string;
  code: BrandCode;
  id: number | null;
  uuid: Uuid;
}

export default class Brand {
  private constructor(private value: Value) {
  }

  public static create(description: string, code: string): Brand {
    return new Brand({
      uuid: Uuid.create(),
      description,
      code: BrandCode.create(code),
      id: null,
    });
  }

  public static restore(uuid: string, id: number, description: string, code: string) {
    return new Brand({
      uuid: Uuid.restore(uuid),
      description,
      code: BrandCode.restore(code),
      id,
    });
  }

  public getUuid() {
    return this.value.uuid.getValue();
  }

  public get description() {
    return this.value.description;
  }

  public get code() {
    return this.value.code.getValue();
  }

  public isNew() {
    return this.value.id === null;
  }
}
