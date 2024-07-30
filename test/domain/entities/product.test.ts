import Product from "../../../src/domain/entities/product";

describe('Test Product Entity', () => {
  test('Should create entity', () => {
    const createProps = {
      description: 'Descricao',
      productCode: 1,
      sectorCode: 'AL',
      brandCode: 'MAT',
      price: 30,
      name: 'Arroz'
    };
    const product = Product.create(createProps);

    expect(product.isNew()).toBeTruthy();
    expect(product.sku.toString()).toBe('MATAL001');
    expect(product.name).toBe(createProps.name);
    expect(product.price).toBe(createProps.price);
    expect(product.description).toBe(createProps.description);
  });

  test('Should restore entity', () => {
    const restoreProps = {
      description: 'product description',
      productCode: 1,
      sectorCode: 'AL',
      brandCode: 'MAT',
      price: 30,
      name: 'Arroz',
      id: 1,
      uuid: '03ea3cad-0d84-4d93-858e-3e91423896cb',
    };
    const product = Product.restore(restoreProps);

    expect(product.isNew()).toBeFalsy();
    expect(product.getUuid()).toBe(restoreProps.uuid);
    expect(product.sku.toString()).toBe('MATAL001');
    expect(product.name).toBe(restoreProps.name);
    expect(product.price).toBe(restoreProps.price);
    expect(product.description).toBe(restoreProps.description);
  });
});
