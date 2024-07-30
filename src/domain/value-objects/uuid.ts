import { v4 as uuidv4, validate } from 'uuid';
import InvalidArgumentException from '../exceptions/validation/invalid-argument';
import { Rules } from '../../common/enums/rules';

export default class Uuid {
  private constructor(
    private value: string,
  ) {
  }

  public static create(uuid?: string) {
    if (uuid === undefined || uuid === null) {
      uuid = uuidv4();
    }
    if (!validate(uuid)) {
      throw new InvalidArgumentException('uuid', Rules.invalidFormat);
    }

    return new Uuid(uuid);
  }

  public static restore(uuid: string) {
    return new Uuid(uuid);
  }

  public getValue() {
    return this.value;
  }
}
