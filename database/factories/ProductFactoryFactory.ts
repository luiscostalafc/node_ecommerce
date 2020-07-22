import Factory from '@ioc:Adonis/Lucid/Factory'
import Product from 'App/Models/Product'
import { randomGroupId } from './GroupFactory'
import { randomSubgroupId } from './SubgroupFactory'

export const ProductFactory = Factory
  .define(Product, async ({ faker }) => ({
    inactive: faker.random.boolean(),
    group_id: await randomGroupId(),
    subgroup_id: await randomSubgroupId(),
  }))
  .build()

export async function randomProductId () {
  const req = await Product.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
