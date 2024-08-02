import { Rules } from "../../../src/common/enums/rules";
import Sector from "../../../src/domain/entities/sector";
import InvalidArgumentException from "../../../src/domain/exceptions/validation/invalid-argument";

describe('Tests for Sector entity', () => {
  test('Should create entity', () => {
    const props = {
      code: 'IN',
      description: 'Informática',
    };

    const sector = Sector.create(props.code, props.description);

    expect(sector.isNew()).toBeTruthy();
    expect(sector.getUuid()).toBeDefined();
    expect(sector.code).toBe(props.code);
    expect(sector.description).toBe(props.description);
  });

  test('Should restore entity', () => {
    const props = {
      id: 1,
      uuid: 'fcb7f8f6-4b97-4a9b-a0c5-0f1e99b34627',
      code: 'IN',
      description: 'Informática',
    };

    const sector = Sector.restore(props.id, props.uuid, props.code, props.description);

    expect(sector.isNew()).toBeFalsy();
    expect(sector.getUuid()).toBe(props.uuid);
    expect(sector.code).toBe(props.code);
    expect(sector.description).toBe(props.description);
  });

  test('Should not create entity with invalid code', () => {
    const props = {
      code: 'INNNN',
      description: 'Informática',
    };

    try {
      expect(Sector.create(props.code, props.description)).toThrow(InvalidArgumentException);
    } catch (error) {
      const exception = error as InvalidArgumentException;

      expect(error instanceof InvalidArgumentException).toBeTruthy();
      expect(exception.field).toBe('code');
      expect(exception.rule).toBe(Rules.invalidSize);
    }
  });
});
