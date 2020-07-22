import Factory from '@ioc:Adonis/Lucid/Factory'
import ProductDescription from 'App/Models/ProductDescription'
import { randomProductId } from './ProductFactoryFactory'

export const ProductDescriptionFactory = Factory
  .define(ProductDescription, async ({ faker }) => ({
    product_id: await randomProductId(),
    title: faker.name.title(),
    name: faker.name.firstName(),
    type: faker.name.jobArea(),
    position: faker.random.arrayElement(['horizontal', 'vertical']),
    system: faker.lorem.word(),
    color: faker.commerce.color(),
    material: faker.lorem.word(),
    obs: faker.lorem.words(5),
  }))
  .build()

export async function randomProductDescriptionId () {
  const req = await ProductDescription.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
