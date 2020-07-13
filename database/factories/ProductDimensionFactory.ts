import Factory from '@ioc:Adonis/Lucid/Factory'
import ProductDimension from 'App/Models/ProductDimension'
// import { randomProductId } from './ProductFactoryFactory'

export const ProductDimensionFactory = Factory
  .define(ProductDimension, ({ faker }) => ({
    // product_id: randomProductId,
    size: faker.random.number(200),
    height: faker.random.number(200),
    width: faker.random.number(200),
    lenth: faker.random.number(200),
    weight: faker.random.number(200),
    inner_diameter: faker.random.number(200),
    external_diameter: faker.random.number(200),
  }))
  .build()

export const randomProductDimensionId = async () => {
  const find = await ProductDimension.first()
  return find?.id
}
