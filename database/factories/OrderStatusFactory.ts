import Factory from '@ioc:Adonis/Lucid/Factory'
import OrderStatus from 'App/Models/OrderStatus'

export const OrderStatusFactory = Factory
  .define(OrderStatus, ({ faker }) => {
    return ({
      order_status: faker.random.arrayElement(['em análise', 'em andamento', 'concluída']),
    })
  })
  .build()

export async function randomOrderStatusId () {
  const req = await OrderStatus.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
