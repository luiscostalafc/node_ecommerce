import Factory from '@ioc:Adonis/Lucid/Factory'
import ProductVariation from 'App/Models/ProductVariation'
// import { randomProductId } from './ProductFactoryFactory'

export const ProductVariationFactory = Factory
  .define(ProductVariation, ({ faker }) => ({
    // product_id: randomProductId,
    product_variation: faker.name.jobTitle(),
  }))
  .build()

export const randomProductVariationId = async () => {
  const find = await ProductVariation.first()
  return find?.id
}
