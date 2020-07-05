import Factory from '@ioc:Adonis/Lucid/Factory'
import ProductAsingment from 'App/Models/ProductAsingment'
import { randomProductId } from './ProductFactoryFactory'

export const ProductAsingmentFactory = Factory
  .define(ProductAsingment, ({ faker }) => ({
    product_asingment: faker.lorem.words(5),
    product_id: randomProductId,
  }))
  .build()

export const randomProductAsingmentId = async () => {
  const find = await ProductAsingment.first()
  return find?.id
}
