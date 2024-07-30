import Uuid from "../value-objects/uuid";

type Value = {
  description: string;
  code: string;
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
      code,
      id: null,
    });
  }
  
  public getUuid() {
    return this.value.uuid.getValue();
  }

  public get description() {
    return this.value.description;
  }

  public get code() {
    return this.value.code
  }

  public isNew() {
    return this.value.id === null;
  }
}
