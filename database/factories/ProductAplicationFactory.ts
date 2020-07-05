import Factory from '@ioc:Adonis/Lucid/Factory'
import ProductAplication from 'App/Models/ProductAplication'
import { randomProductId } from './ProductFactoryFactory'

export const ProductAplicationFactory = Factory
  .define(ProductAplication, ({ faker }) => ({
    product_id: randomProductId,
    automaker: faker.random.arrayElement(['GM', 'Renault', 'Ferrari', 'Dodge']),
    model: faker.name.title(),
    year_start: faker.random.number(2035),
    year_end: faker.random.number(2035),
    engine: faker.name.lastName(),
    complement: faker.name.lastName(),
    quantity_used: faker.random.number(30),
    quantity_package: faker.random.number(30),
  }))
  .build()

export const randomProductAplicationId = async () => {
  const find = await ProductAplication.first()
  return find?.id
}
