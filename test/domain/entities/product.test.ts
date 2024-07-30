import { Rules } from "../../../src/common/enums/rules";
import Product from "../../../src/domain/entities/product";
import InvalidArgumentException from "../../../src/domain/exceptions/validation/invalid-argument";

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

  test('Should not create entity with a invalid prive', () => {
    try {
      const createProps = {
        description: 'Descricao',
        productCode: 1,
        sectorCode: 'AL',
        brandCode: 'MAT',
        price: -10,
        name: 'Arroz'
      };

      Product.create(createProps);
    } catch (error) {
      expect(error instanceof InvalidArgumentException).toBeTruthy();
      expect((error as InvalidArgumentException).field).toBe('price');
      expect((error as InvalidArgumentException).rule).toBe(Rules.invalidSize);
    }
  });

  test('Should not create entity with a invalid sector code', () => {
    try {
      const createProps = {
        description: 'Descricao',
        productCode: 1,
        sectorCode: 'ALLL',
        brandCode: 'MAT',
        price: 100,
        name: 'Arroz'
      };

      Product.create(createProps);
    } catch (error) {
      expect(error instanceof InvalidArgumentException).toBeTruthy();
      expect((error as InvalidArgumentException).field).toBe('sectorCode');
      expect((error as InvalidArgumentException).rule).toBe(Rules.invalidSize);
    }
  });

  test('Should not create entity with a invalid brand code', () => {
    try {
      const createProps = {
        description: 'Descricao',
        productCode: 1,
        sectorCode: 'AL',
        brandCode: 'MATMAT',
        price: 100,
        name: 'Arroz'
      };

      Product.create(createProps);
    } catch (error) {
      expect(error instanceof InvalidArgumentException).toBeTruthy();
      expect((error as InvalidArgumentException).field).toBe('brandCode');
      expect((error as InvalidArgumentException).rule).toBe(Rules.invalidSize);
    }
  });
});
