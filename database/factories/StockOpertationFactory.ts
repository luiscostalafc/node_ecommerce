import Factory from '@ioc:Adonis/Lucid/Factory'
import StockOperation from 'App/Models/StockOperation'
// import { randomOperationId } from './OperationFactory'
// import { randomProductId } from './ProductFactoryFactory'

export const StockOperationFactory = Factory
  .define(StockOperation, ({ faker }) => ({
    quantity: faker.random.number(50),
    unit_value: faker.random.number(50),
    comment: faker.lorem.words(5),
    // operation_id: randomOperationId,
    // product_id: randomProductId,
  }))
  .build()

export const randomStockOperationId = async () => {
  const find = await StockOperation.first()
  return find?.id
}
