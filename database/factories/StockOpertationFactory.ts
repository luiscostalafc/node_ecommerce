import Factory from '@ioc:Adonis/Lucid/Factory'
import StockOperation from 'App/Models/StockOperation'
import { randomOperationId } from './OperationFactory'
import { randomProductId } from './ProductFactoryFactory'

export const StockOperationFactory = Factory
  .define(StockOperation, async ({ faker }) => ({
    quantity: faker.random.number(50),
    unit_value: faker.random.number(50),
    comment: faker.lorem.words(5),
    operation_id: await randomOperationId(),
    product_id: await randomProductId(),
  }))
  .build()

export async function randomStockOperationId () {
  const req = await StockOperation.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
