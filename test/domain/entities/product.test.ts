import Product from "../../../src/domain/entities/product";

describe('Test Product Entity', () => {
  test('Should create entity', () => {
    const product = Product.create({
      description: 'Descricao',
      productCode: 1,
      sectorCode: 'AL',
      brandCode: 'MAT',
      price: 30,
      name: 'Arroz'
    });

    expect(product.isNew()).toBeTruthy();
    expect(product.sku.toString()).toBe('MATAL001');
  });
});
