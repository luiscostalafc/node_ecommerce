import Factory from '@ioc:Adonis/Lucid/Factory'
import ProductDescription from 'App/Models/ProductDescription'
import { randomProductId } from './ProductFactoryFactory'

export const ProductDescriptionFactory = Factory
  .define(ProductDescription, ({ faker }) => ({
    product_id: randomProductId,
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

export const randomProductDescriptionId = async () => {
  const find = await ProductDescription.first()
  return find?.id
}
