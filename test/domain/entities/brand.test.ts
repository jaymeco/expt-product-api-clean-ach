import Brand from "../../../src/domain/entities/brand";

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
});
