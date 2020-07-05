import Factory from '@ioc:Adonis/Lucid/Factory'
import OrderStatus from 'App/Models/OrderStatus'

export const OrderStatusFactory = Factory
  .define(OrderStatus, ({ faker }) => {
    return ({
      order_status: faker.random.arrayElement(['em análise', 'em andamento', 'concluída']),
    })
  })
  .build()

export const randomOrderStatusId = async () => {
  const find = await OrderStatus.first()
  return find?.id
}
