import Factory from '@ioc:Adonis/Lucid/Factory'
import ProductDimension from 'App/Models/ProductDimension'
import { randomProductId } from './ProductFactoryFactory'

export const ProductDimensionFactory = Factory
  .define(ProductDimension, async ({ faker }) => ({
    product_id: await randomProductId(),
    size: faker.random.number(200),
    height: faker.random.number(200),
    width: faker.random.number(200),
    lenth: faker.random.number(200),
    weight: faker.random.number(200),
    inner_diameter: faker.random.number(200),
    external_diameter: faker.random.number(200),
  }))
  .build()

export async function randomProductDimensionId () {
  const req = await ProductDimension.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
