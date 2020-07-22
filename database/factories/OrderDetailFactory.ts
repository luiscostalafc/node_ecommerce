import Factory from '@ioc:Adonis/Lucid/Factory'
import OrderDetail from 'App/Models/OrderDetail'
import { randomOrderId } from './OrderFactory'

export const OrderDetailFactory = Factory
  .define(OrderDetail, async ({ faker }) => ({
    reference: faker.lorem.slug(),
    payment_method: faker.finance.transactionType(),
    order_status: faker.random.arrayElement(['aprovada', 'em análise']),
    extra_amount: faker.finance.amount(1),
    intallment_quantity: faker.random.number(12),
    intallment_value: faker.random.number(999),
    order_id: await randomOrderId(),
  }))
  .build()

export async function randomOrderDatailId () {
  const req = await OrderDetail.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return Number(ids[Math.floor(Math.random() * ids.length)])
}
