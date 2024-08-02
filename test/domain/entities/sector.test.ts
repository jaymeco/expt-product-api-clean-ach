import Sector from "../../../src/domain/entities/sector";

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
});
