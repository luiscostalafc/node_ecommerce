import Factory from '@ioc:Adonis/Lucid/Factory'
import ProductAplication from 'App/Models/ProductApplication'
import { randomProductId } from './ProductFactoryFactory'

export const ProductAplicationFactory = Factory
  .define(ProductAplication, async ({ faker }) => ({
    product_id: await randomProductId(),
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

export async function randomProductAplicationId () {
  const req = await ProductAplication.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
