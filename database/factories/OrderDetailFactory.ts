import Factory from '@ioc:Adonis/Lucid/Factory'
import OrderDetail from 'App/Models/OrderDetail'
import { randomOrderId } from './OrderFactory'

export const OrderDetailFactory = Factory
  .define(OrderDetail, ({ faker }) => ({
    reference: faker.lorem.slug(),
    payment_method: faker.finance.transactionType(),
    order_status: faker.random.arrayElement(['aprovada', 'em análise']),
    extra_amount: faker.finance.amount(1),
    intallment_quantity: faker.random.number(12),
    intallment_value: faker.random.number(999),
    order_id: randomOrderId,
  }))
  .build()

export const randomOrderDatailId = async () => {
  const find = await OrderDetail.first()
  return find?.id
}
