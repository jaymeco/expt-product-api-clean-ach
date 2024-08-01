import { Rules } from "../../../src/common/enums/rules";
import Brand from "../../../src/domain/entities/brand";
import InvalidArgumentException from "../../../src/domain/exceptions/validation/invalid-argument";

describe('Tests for Brand entity', () => {
  test('Should create entity', () => {
    const createProps = {
      description: 'notebook',
      code: 'DEL',
    };

    const brand = Brand.create(createProps.description, createProps.code);

    expect(brand.isNew()).toBeTruthy();
    expect(brand.getUuid()).toBeDefined();
    expect(brand.code).toBe(createProps.code);
    expect(brand.description).toBe(createProps.description);
  });

  test('Should restore entity', () => {
    const props = {
      description: 'Dell',
      code: 'DEL',
      id: 1,
      uuid: '739ac953-edef-44dc-aa65-3aaa339f2e1b',
    };

    const brand = Brand.restore(props.uuid, props.id, props.description, props.code);

    expect(brand.isNew()).toBeFalsy();
    expect(brand.getUuid()).toBe(props.uuid);
    expect(brand.code).toBe(props.code);
    expect(brand.description).toBe(props.description);
  });

  test('Should not create entity with a invalid code', () => {
    const createProps = {
      description: 'Dell',
      code: 'DELL',
    };

    try {
      expect(Brand.create(createProps.description, createProps.code)).toThrow(InvalidArgumentException);
    } catch (error) {
      expect(error instanceof InvalidArgumentException).toBeTruthy();
      expect((error as InvalidArgumentException).field).toBe('code');
      expect((error as InvalidArgumentException).rule).toBe(Rules.invalidSize);
    }
  });
});
