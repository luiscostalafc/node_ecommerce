import Factory from '@ioc:Adonis/Lucid/Factory'
import Product from 'App/Models/Product'
// import { randomGroupId } from './GroupFactory'
// import { randomSubgroupId } from './SubgroupFactory'

export const ProductFactory = Factory
  .define(Product, ({ faker }) => ({
    inactive: faker.random.boolean(),
    // group_id: randomGroupId,
    // subgroup_id: randomSubgroupId,
  }))
  .build()

export const randomProductId = async () => {
  const find = await Product.first()
  return find?.id
}
