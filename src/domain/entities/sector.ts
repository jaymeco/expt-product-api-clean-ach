import { SectorCode } from "../value-objects/sector-code";
import Uuid from "../value-objects/uuid";

type Value = {
  id: number | null;
  uuid: Uuid;
  code: SectorCode;
  description: string;
}

export default class Sector {
  private constructor(private value: Value) { }

  public static create(code: string, description: string) {
    return new Sector({
      uuid: Uuid.create(),
      code: SectorCode.create(code),
      description,
      id: null,
    });
  }

  public static restore(id: number, uuid: string, code: string, description: string) {
    return new Sector({
      uuid: Uuid.restore(uuid),
      code: SectorCode.restore(code),
      description,
      id,
    });
  }

  public getUuid() {
    return this.value.uuid.getValue();
  }

  public get code() {
    return this.value.code.getValue();
  }

  public get description() {
    return this.value.description;
  }

  public isNew() {
    return this.value.id === null;
  }
}
