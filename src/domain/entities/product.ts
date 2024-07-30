import { Rules } from "../../common/enums/rules";
import InvalidArgumentException from "../exceptions/validation/invalid-argument";
import Sku from "../value-objects/sku";
import Uuid from "../value-objects/uuid";

type Value = {
  name: string;
  description: string | null;
  sku: Sku;
  price: number;
  id: number | null;
  uuid: Uuid;
};

type CreateProps = {
  name: string;
  description: string | null;
  price: number;
  brandCode: string;
  sectorCode: string;
  productCode: number;
};

type RestoreProps = {
  id: number;
  uuid: string;
} & CreateProps;

export default class Product {
  private constructor(private readonly value: Value) {
  }

  public static create(props: CreateProps) {
    if (props.price <= 0) {
      throw new InvalidArgumentException('price', Rules.invalidSize);
    }

    return new Product({
      description: props.description,
      name: props.name,
      price: props.price,
      sku: Sku.create({
        brandCode: props.brandCode,
        sectorCode: props.sectorCode,
        productCode: props.productCode,
      }),
      id: null,
      uuid: Uuid.create(),
    });
  }

  public static restore(props: RestoreProps) {
    return new Product({
      description: props.description,
      name: props.name,
      price: props.price,
      sku: Sku.restore({
        brandCode: props.brandCode,
        sectorCode: props.sectorCode,
        productCode: props.productCode,
      }),
      id: props.id,
      uuid: Uuid.restore(props.uuid),
    });
  }

  public getUuid() {
    return this.value.uuid.getValue();
  }

  public get sku() {
    return this.value.sku;
  }

  public get name() {
    return this.value.name;
  }

  public get price() {
    return this.value.price;
  }

  public get description() {
    return this.value.description;
  }

  public isNew() {
    return this.value.id === null;
  }
}
