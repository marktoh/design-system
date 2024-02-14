import { faker } from "@faker-js/faker";

interface Product {
  id: number;
  name: string;
  description: string;
  material: string;
  adjective: Array<string>;
  price: string;
  dateCreated: Date | string;
}
interface Products {
  products: Array<Product>;
}
const createProduct = (): Product => ({
  id: faker.number.int(1000),
  name: faker.commerce.product(),
  description: faker.commerce.productDescription(),
  material: faker.commerce.productMaterial(),
  adjective: Array.from(Array(5))?.map((e) =>
    faker.commerce.productAdjective(),
  ),
  price: faker.commerce.price(),
  dateCreated: faker.date.anytime(),
});

export { type Product, type Products, createProduct };
