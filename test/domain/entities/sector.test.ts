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

  test('Should restore entity', () => {
    const props = {
      id: 1,
      uuid: '',
      code: 'IN',
      description: 'Informática',
    };

    const sector = Sector.restore(props.id, props.uuid, props.code, props.description);

    expect(sector.isNew()).toBeFalsy();
    expect(sector.getUuid()).toBe(props.uuid);
    expect(sector.code).toBe(props.code);
    expect(sector.description).toBe(props.description);
  });
});
